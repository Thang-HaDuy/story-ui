import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.id}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={`http://127.0.0.1:8000/static${data.avatar}`} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
                <span className={cx('chapter')}>chapter: {data.sum_chap}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
