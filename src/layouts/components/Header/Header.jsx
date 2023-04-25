import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const handleSignup = () => {
        navigate('/signup/');
    };

    const handleLogin = () => {
        navigate('/login/');
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {user === undefined || user === null ? (
                        <>
                            <Button onClick={handleSignup} text>
                                sign up
                            </Button>
                            <Button onClick={handleLogin} primary>
                                Log in
                            </Button>
                        </>
                    ) : (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    )}

                    {user === undefined || user === null ? (
                        <></>
                    ) : (
                        <Image
                            onClick={() => navigate('/profile')}
                            className={cx('user-avatar')}
                            src={user.avatar}
                            alt="Nguyen Van A"
                        />
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
