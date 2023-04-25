import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ItemTop from '~/components/ItemTop';

import styles from './Sidebar.module.scss';
import * as SidebarService from '~/services/SidebarService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [itemTops, setItemTops] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await SidebarService.Sidebar();
            setItemTops(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                TRUYỆN ĐANG HOT
                <FontAwesomeIcon className={cx('icon')} icon={faAngleDoubleDown} />
            </div>
            <div className={cx('list-item')}>
                {itemTops.map((itemTop, index) => (
                    <ItemTop obj={itemTop} key={index} number={index} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
