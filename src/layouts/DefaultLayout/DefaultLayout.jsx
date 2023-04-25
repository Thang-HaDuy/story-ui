import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import HeaderContro from '~/layouts/components/HeaderContro';
import styles from './DefaultLayout.module.scss';
import SlideShow from '~/layouts/components/SlideShow';
import Footer from '~/layouts/components/Footer';
import StoryFull from '~/layouts/components/StoryFull';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {/* <HeaderContro /> */}
            <div className={cx('container')}>
                <SlideShow />
                <div className={cx('wrapper-content')}>
                    <div className={cx('content')}>{children}</div>
                    <Sidebar />
                </div>
                <StoryFull />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
