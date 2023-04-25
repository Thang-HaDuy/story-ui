import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <div className={cx('title')}>Liên hệ bản quyền</div>
                <div className={cx('title')}>Copyright © 2022 TopTruyen</div>
            </div>
        </div>
    );
}

export default Footer;
