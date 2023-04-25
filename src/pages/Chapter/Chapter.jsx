import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import cookies from 'react-cookies';

import Image from '~/components/Image';
import styles from './Chapter.module.scss';
import * as ChapterDetailServices from '~/services/ChapterDetailsService';
import * as ChapterServices from '~/services/ChapterServices';
import * as CommentChapServices from '~/services/CommentChapServices';
import * as addCommentChapServices from '~/services/addCommentChapServies';

const cx = classNames.bind(styles);

function Chapter() {
    const [addComments, setAddComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [chap, setChap] = useState([]);
    const [chapStory, setChapStory] = useState([]);
    const [load, setLoad] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const { chapterid } = useParams();

    useEffect(() => {
        const loadChapter = async () => {
            const res = await ChapterDetailServices.ChapterDetail(chapterid);
            setChap(res);
            const chapter = await ChapterServices.Chapter(res.story.id);
            setChapStory(chapter.results);
            const comment = await CommentChapServices.CommentChap(chapterid);
            setComments(comment);
        };

        loadChapter();
    }, [load, chapterid]);

    const addComment = async (e) => {
        e.preventDefault();
        const formdata = {
            content: addComments,
        };
        const access_token = cookies.load('access_token');
        let addComment = await addCommentChapServices.addCommentChap(chapterid, formdata, access_token);
        let a = 1;
        setAddComments('');
        setLoad(++a);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('story-title')}>{chap.story?.name}</div>
            <div className={cx('chap-title')}>
                Chương {chap.number}: {chap.name}
            </div>
            <div className={cx('contro')}>
                <button>
                    <FontAwesomeIcon icon={faAngleLeft} /> Previous
                </button>
                <HeadlessTippy
                    interactive
                    visible={showResult}
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cx('chap-result')} tabIndex="-1" {...attrs}>
                            {chapStory.map((chap) => (
                                <Link onClick={handleHideResult} to={`/chapter/${chap.id}`} className={cx('chap')}>
                                    Chapter: {chap.number}
                                </Link>
                            ))}
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('list-chap')} onClick={() => setShowResult(true)}>
                        Chương {chap.number} <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </HeadlessTippy>
                <button>
                    Next <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className={cx('content')}>{chap.content}</div>
            <div className={cx('box-comment')}>
                <h1 className={cx('header-comment')}>BÌNH LUẬN TRUYỆN</h1>
                <form className={cx('form-comment')} onSubmit={addComment}>
                    <textarea
                        value={addComments}
                        onChange={(e) => setAddComments(e.target.value)}
                        name="txtComment"
                        rows="4"
                        cols="85"
                    ></textarea>
                    <button type="submit">Đăng</button>
                </form>
                {comments.map((comment) => (
                    <div className={cx('comment')}>
                        <Image
                            className={cx('avatar-comment')}
                            src={`http://127.0.0.1:8000/static${comment.author.avatar}`}
                            alt="avatar"
                        />
                        <div className={cx('comment-content')}>
                            <div className={cx('name-author')}>{comment.author.username}</div>
                            <div className={cx('content-comment')}>{comment.content}</div>
                            <div className={cx('feedback')}>Trả lời</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chapter;
