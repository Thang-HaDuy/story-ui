import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ItemTop.module.scss';

const cx = classNames.bind(styles);

function ItemTop({ obj, number }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('number')}>{++number}</div>
            <div className={cx('story')}>
                <Link to={`story/${obj.id}`} className={cx('story-name')}>
                    {obj.name}
                </Link>
                <div className={cx('story-category')}>Chapter: {obj.sum_chap}</div>
            </div>
        </div>
    );
}

export default ItemTop;
