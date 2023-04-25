import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './HeaderContro.module.scss';

const cx = classNames.bind(styles);

function HeaderContro() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('inner')}>
                <Link to={'/'}>
                    <li className={cx('contro')}>HOME</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>HOT</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>THỂ LOẠI</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>LỊCH SỬ</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>THEO DÕI</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>XẾP HẠNG</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>CON TRAI</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>CON GÁI</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>MANHWA 18</li>
                </Link>
                <Link to={'/hot'}>
                    <li className={cx('contro')}>GROUP</li>
                </Link>
            </ul>
        </div>
    );
}

export default HeaderContro;
