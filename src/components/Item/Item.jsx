import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../Image';

import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item({ obj }) {
    return (
        <Link to={`/story/${obj.id}`} className={cx('wrapper')}>
            <div className={cx('content')}>
                <Image className={cx('avatar')} src={`http://127.0.0.1:8000/static${obj.avatar}`} alt={obj.name} />
                <div className={cx('list-item')}>
                    <div className={cx('name')}>{obj.name}</div>
                    <div className={cx('category')}>
                        {obj.category.map((category) => (
                            <div className={cx('cate')}>{category.name}, </div>
                        ))}
                    </div>
                    <div className={cx('chap')}>{obj.sum_chap} chuong</div>
                </div>
            </div>
        </Link>
    );
}

export default Item;
