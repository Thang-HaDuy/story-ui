import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ItemStory.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ItemStory({ obj }) {
    return (
        <Link to={`story/${obj.id}`} className={cx('wrapper')}>
            <div className={cx('item')}>
                <img src={obj.avatar} alt={obj.name} className={cx('img')} />
            </div>
            <div className={cx('title')}>
                <h3 className={cx('name')}>{obj.name}</h3>
            </div>
            {!obj.status ? (
                <span className={cx('full-label')}>
                    <img src={images.full} alt="Tiktok" />
                </span>
            ) : (
                <></>
            )}
        </Link>
    );
}

export default ItemStory;
