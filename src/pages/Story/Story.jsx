import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cookies from 'react-cookies';

import Image from '~/components/Image';
import styles from './Story.module.scss';
import * as StorySerives from '~/services/StoryServies';
import * as CommentServices from '~/services/CommentServices';
import * as ChapterServices from '~/services/ChapterServices';
import * as addCommentServies from '~/services/addCommentServies';
import moment from 'moment';

const cx = classNames.bind(styles);

function Story() {
    const [story, setStory] = useState({});
    const [comments, setComments] = useState([]);
    const [load, setLoad] = useState(1);
    const [addComments, setAddComments] = useState([]);
    const [chaps, setChaps] = useState([]);
    const { storyid } = useParams();
    useEffect(() => {
        const loadStory = async () => {
            const res = await StorySerives.Story(storyid);
            setStory(res);
            const chap = await ChapterServices.Chapter(storyid);
            setChaps(chap.results);
            const comment = await CommentServices.Comment(storyid);
            setComments(comment.results);
        };

        loadStory();
    }, [load]);

    const addComment = async (e) => {
        e.preventDefault();
        const formdata = {
            content: addComments,
        };
        const access_token = cookies.load('access_token');
        let addComment = await addCommentServies.addComment(storyid, formdata, access_token);
        let a = 1;
        setAddComments('');
        setLoad(++a);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>THÔNG TIN TRUYỆN</header>
                <div className={cx('info')}>
                    <div className={cx('info-basic')}>
                        <Image className={cx('avatar')} src={story.avatar} alt="avatar" />
                        <h4>
                            Tác giả: <span>{story.author != null ? story.author.username : 'sắp cập nhật'}</span>
                        </h4>
                        <h4>
                            Thể Loại:{' '}
                            {story.category?.map((cate) => (
                                <span key={cate.id}>{cate.name},</span>
                            ))}
                        </h4>
                        <h4>
                            Trạng thái: <span>{story.status ? 'đang ra' : 'đã full'}</span>
                        </h4>
                    </div>
                    <div className={cx('info-details')}>
                        <h2 className={cx('name')}>{story.name}</h2>
                        <div className={cx('rating')}>
                            <Rating
                                initialRating={story.rating?.rate}
                                stop={10}
                                emptySymbol={<FontAwesomeIcon icon={faStarRegular} />}
                                fullSymbol={<FontAwesomeIcon icon={faStarSolid} />}
                            />
                            <span>
                                Đánh giá: {story.rating?.rate}/10 từ {story.rating?.number} lượt
                            </span>
                        </div>
                        <div className={cx('Introduce')}>{story.introduce}</div>
                        <div className={cx('same-author')}>
                            <h2>Truyện cùng tác giả</h2>
                            {story.author != null ? (
                                <ul>
                                    {story.author.story?.map((story) => (
                                        <li key={story.id}>{story.name}</li>
                                    ))}
                                </ul>
                            ) : (
                                'khong co'
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('list-chap')}>
                    <h1 className={cx('header-chap')}>DANH SÁCH CHƯƠNG</h1>
                    <div className={cx('list-header')}>
                        <div className={cx('number-chap')}>Số chương</div>
                        <div className={cx('update')}>Cập nhật</div>
                        <div className={cx('view')}>Lượt xem</div>
                    </div>
                    {chaps.map((chap) => (
                        <div className={cx('list-chapter')}>
                            <Link to={`/chapter/${chap.id}`} className={cx('number-chapter')}>
                                Chương {chap.number}: {chap.name}
                            </Link>
                            <div className={cx('update-chapter')}>{moment(chap.created_date).fromNow()}</div>
                            <div className={cx('view-chapter')}>{chap.view}</div>
                        </div>
                    ))}
                </div>
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
        </div>
    );
}

export default Story;
