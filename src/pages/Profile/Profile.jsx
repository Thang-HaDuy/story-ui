import classNames from 'classnames/bind';
import cookies from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Profile.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { logoutUser } from '~/ActionCreators/UserCreators';

const cx = classNames.bind(styles);

function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const logout = (e) => {
        e.preventDefault();
        cookies.remove('access_token');
        cookies.remove('user');
        dispatch(logoutUser());
        navigate('/');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('header')}>THÔNG TIN TÀI KHOẢN</h1>
                <div className={cx('inner')}>
                    <div className={cx('container')}>
                        <div className={cx('contai')}>
                            <div className={cx('name')}>Last Name</div>
                            <input type="text" className={cx('input')} value={user.last_name} />
                        </div>

                        <div className={cx('contai')}>
                            <div className={cx('name')}>first Name</div>
                            <input type="text" className={cx('input')} value={user.first_name} />
                        </div>

                        <div className={cx('contai')}>
                            <div className={cx('name')}>Username</div>
                            <input type="text" className={cx('input')} value={user.username} />
                        </div>

                        <div className={cx('contai')}>
                            <div className={cx('name')}>Email</div>
                            <input type="text" className={cx('input')} value={user.email} />
                        </div>

                        <Button className={cx('button')} onClick={logout} primary>
                            log out
                        </Button>
                    </div>
                    <Image className={cx('user-avatar')} src={user.avatar} alt="Nguyen Van A" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
