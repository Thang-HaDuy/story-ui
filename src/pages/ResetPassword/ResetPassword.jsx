import { useState } from 'react';
import classNames from 'classnames/bind';
import { useSearchParams, useNavigate } from 'react-router-dom';

import styles from './ResetPassword.module.scss';
import * as ResetPasswordServices from '~/services/ResetPasswordServices';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ResetPassword() {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    let uidb64 = searchParams.get('uidb64');
    let token = searchParams.get('token');

    const handleSubmit = (event) => {
        event.preventDefault();

        const info = async () => {
            const formData = { uidb64: uidb64, token: token, password: password };

            let res = await ResetPasswordServices.ResetPassword(formData);

            navigate('/login');
        };

        if (password === confirmPassword) {
            info();
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Đổi mật khẩu</h1>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-contro')}>
                    <div className={cx('name')}>Password</div>
                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className={cx('form-contro')}>
                    <div className={cx('name')}>confirm password</div>
                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="confirm password..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <Button className={cx('button')} primary>
                    Reset
                </Button>
            </form>
        </div>
    );
}

export default ResetPassword;
