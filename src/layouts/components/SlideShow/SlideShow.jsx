import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import * as SlideShowService from '~/services/SlideShowService';
import ItemStory from '~/components/ItemStory';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow() {
    const [slideItems, setSlideItems] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await SlideShowService.SlideShow();
            setSlideItems(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>
                TRUYỆN ĐỀ CỬ
                <FontAwesomeIcon className={cx('icon')} icon={faAngleDoubleDown} />
            </h1>
            <div className={cx('inner')}>
                {slideItems.map((slideItem, index) => (
                    <ItemStory key={index} obj={slideItem} />
                ))}
            </div>
        </div>
    );
}
export default SlideShow;
