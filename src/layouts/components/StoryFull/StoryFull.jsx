import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './StoryFull.module.scss';
import * as StoryFullService from '~/services/StoryFullService';
import ItemStory from '~/components/ItemStory';

const cx = classNames.bind(styles);

function StoryFull() {
    const [slideItems, setSlideItems] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await StoryFullService.StoryFull();
            setSlideItems(result);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>
                TRUYỆN FULL
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

export default StoryFull;
// images.full
