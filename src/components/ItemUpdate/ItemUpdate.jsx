import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import moment from 'moment';
import { Link } from 'react-router-dom';

import styles from './ItemUpdate.module.scss';

const cx = classNames.bind(styles);

function ItemUpdate({ obj, path }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={path} className={cx('name')}>
                <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                {obj.name}
            </Link>
            <div className={cx('category')}>
                {obj.category.map((category) => (
                    <Link className={cx('cate')} to={`category/${category.id}`}>
                        {category.name},{' '}
                    </Link>
                ))}
            </div>
            {obj.new_chap.map((new_chap) => (
                <Link to={`chapter/${new_chap.id}/`} className={cx('chapter')}>
                    Chapter:
                    <div>{new_chap.number}</div>
                </Link>
            ))}
            <div className={cx('time')}>{obj.new_chap.map((new_chap) => moment(new_chap.updated_date).fromNow())}</div>
        </div>
    );
}

export default ItemUpdate;
