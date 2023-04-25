import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import * as HomeService from '~/services/HomeService';
import ItemUpdate from '~/components/ItemUpdate/ItemUpdate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [storys, setStorys] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await HomeService.Home();
            setStorys(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                TRUYỆN MỚI CẬP NHẬT
                <FontAwesomeIcon className={cx('icon')} icon={faAngleDoubleDown} />
            </div>
            <div className={cx('list-item')}>
                {storys.map((story, index) => (
                    <ItemUpdate obj={story} key={index} path={`/story/${story.id}/`} />
                ))}
            </div>
        </div>
    );
}

export default Home;
