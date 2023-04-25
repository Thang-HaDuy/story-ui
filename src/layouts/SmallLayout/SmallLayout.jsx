import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './SmallLayout.module.scss';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function SmallLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default SmallLayout;
