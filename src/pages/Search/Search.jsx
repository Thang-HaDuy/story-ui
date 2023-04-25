import { useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Search.module.scss';
import Item from '~/components/Item';
import * as searchServies from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchParams] = useSearchParams();
    const [items, setItems] = useState([]);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const [page, setPage] = useState(1);

    let value = searchParams.get('q');
    const location = useLocation();

    useEffect(() => {
        const fetchApi = async () => {
            let query = location.search;
            if (query === '') {
                query = `?page=${page}`;
            } else {
                query += `&page=${page}`;
            }

            const res = await searchServies.search(value, 'more');
            console.log(res);
            try {
                setItems(res.results);

                setNext(res.next !== null);
                setPrev(res.previous !== null);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, [location.search, page]);

    const paging = (inc) => {
        setPage(page + inc);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>TÌM TRUYỆN VỚI TỪ KHÓA: {value}</header>
                {items.map((item, index) => (
                    <Item key={index} obj={item} />
                ))}
            </div>
        </div>
    );
}

export default Search;
