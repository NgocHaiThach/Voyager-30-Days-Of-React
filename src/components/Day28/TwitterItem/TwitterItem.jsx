import React, { useContext, useState } from 'react';
import { TweetsContext } from '../TwitterTweets';
import './TwitterItem.css';

export default function TwitterItem({ post }) {

    const { arrPost, handleDeletePost, handleUpdatePost } = useContext(TweetsContext);
    const [isEdit, setIsEdit] = useState(post.edit);
    const [textPost, setTextPost] = useState(post.content)
    console.log(post.content)

    const onDelete = (id) => {
        handleDeletePost(id)
    }

    const onEdit = (id, content) => {
        handleUpdatePost(id, content);
        setIsEdit(false)
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            {/* {arrPost.map((post, index) => (

            ))} */}
            {!isEdit ?
                <div className='twitter-post'>
                    <div className="post__info-user">
                        <i className="fa-solid fa-user post__icon-user"></i>
                        <h4>
                            Asabeneh Yetayeh
                            <span className='post__tag-name'> @Asabeneh</span>
                        </h4>
                    </div>
                    <div className="post__text">
                        <p>{post.content}</p>
                    </div>
                    <div className="post__detail">
                        <div className="post__controls">
                            <i onClick={() => setIsEdit(true)} className="far fa-edit post__edit"></i>
                            <i onClick={() => onDelete(post.id)} className="far fa-trash-alt post__delete"></i>
                        </div>
                        <div className='post__activity'>
                            <i className="far fa-comment post__comment"></i>
                            <i className="far fa-heart post__heart"></i>
                            <i className="fas fa-retweet post__retweet"></i>
                        </div>
                        <div className="post__desciption">
                            <small>Aug 09, 2022 13:14 pm</small>
                        </div>
                    </div>
                </div> :
                <div className='twitter-post'>
                    <textarea onChange={(e) => setTextPost(e.target.value)} value={textPost} className='twiter-control_textarea ' />
                    <br />
                    <button onClick={() => onEdit(post.id, post.content)} className='twitter__button'>Save</button>
                    <br />
                    <button onClick={() => setIsEdit(false)} className='twitter__button' style={{ backgroundColor: 'grey' }}>Cancle</button>
                </div>}
        </div>

    )
}
