import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Signup.module.scss';
import * as SignupServies from '~/services/SignupServies';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Signup() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const avatar = useRef();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let registerUser = async () => {
            const formData = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: userName,
                password: password,
                avatar: avatar.current.files[0],
            };

            let res = await SignupServies.Signup(formData);

            navigate('/checkmail');
        };

        if (password !== null && password === confirmPassword) {
            registerUser();
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h1 className={cx('title')}>ĐĂNG KÝ TÀI KHOẢN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>First name</div>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>Last name</div>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>User name</div>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="User name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>Email</div>
                            <input
                                className={cx('input')}
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>Password</div>
                            <input
                                className={cx('input')}
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>confirm password</div>
                            <input
                                className={cx('input')}
                                type="password"
                                placeholder="confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-contro')}>
                            <div className={cx('name')}>Avatar</div>
                            <input className={cx('input')} type="file" ref={avatar} />
                        </div>
                        <Button className={cx('button')} primary>
                            sign up
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
