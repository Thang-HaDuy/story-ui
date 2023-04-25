import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Login.module.scss';
import * as Oauth2InfoServies from '~/services/Oauth2InfoServies';
import { loginUser } from '~/ActionCreators/UserCreators';
import * as LoginServies from '~/services/LoginServies';
import * as CurrentUserServies from '~/services/CurrentUserServies';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const info = async () => {
            const info = await Oauth2InfoServies.Oauth2Info();

            const formData = {
                username: userName,
                password: password,
                client_id: info.client_id,
                client_secret: info.client_secret,
                grant_type: 'password',
            };

            let res = await LoginServies.Login(formData);

            cookies.save('access_token', res.access_token);

            let user = await CurrentUserServies.CurrenUser(res.access_token);

            cookies.save('user', user);

            dispatch(loginUser(user));

            navigate('/');
        };

        info();
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>ĐĂNG NHẬP</h1>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-contro')}>
                    <div className={cx('name')}>Username</div>
                    <input
                        className={cx('input')}
                        type="text"
                        placeholder="Username..."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className={cx('form-contro')}>
                    <div className={cx('name')}>Password</div>
                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className={cx('form-group')}>
                    <Link to={'/forgot/'} className={cx('login-link')}>
                        Quên mật khẩu
                    </Link>
                    <Link to={'/signup/'} className={cx('login-link')}>
                        Đăng ký mới
                    </Link>
                </div>

                <Button className={cx('button')} primary>
                    sign up
                </Button>
            </form>
        </div>
    );
}

export default Login;
