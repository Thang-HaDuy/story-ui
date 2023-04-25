import classNames from 'classnames/bind';
import { useState } from 'react';

import Button from '~/components/Button';
import styles from './Forgot.module.scss';
import * as ForgotPasswordServices from '~/services/ForgotPasswordServices';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Forgot() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const info = async () => {
            const formData = {
                email: email,
            };
            const res = await ForgotPasswordServices.ForgotPassword(formData);
            navigate('/checkmail');
        };

        info();
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>lấy lại mật khẩu</h1>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-contro')}>
                    <div className={cx('name')}>Email</div>
                    <input
                        className={cx('input')}
                        type="text"
                        placeholder="email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <Button className={cx('button')} primary>
                    Gửi yêu cầu
                </Button>
            </form>
        </div>
    );
}

export default Forgot;
