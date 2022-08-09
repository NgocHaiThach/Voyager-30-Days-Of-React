import React, { useContext, useState } from 'react';
import { TweetsContext } from '../TwitterTweets';
import './ControlInput.css';

export default function ControlInput() {
    const { handleAddPost } = useContext(TweetsContext)
    const [inputPost, setInputPost] = useState('');

    const onAddPost = (event) => {
        event.preventDefault();
        if (inputPost !== '') {
            handleAddPost(inputPost)
            setInputPost('')
        }
    }
    return (
        <form className='twittwe-control__form'>
            <div>
                <div className='twitter-control__input'>
                    <textarea value={inputPost} onChange={(e) => setInputPost(e.target.value)} className='twiter-control_textarea' placeholder='Tweet about 30 Days Of React ...' />
                </div>
                <p className='twitter-control__text-length'>{250 - inputPost.length}</p>
            </div>
            <div>
                <button onClick={onAddPost} className='twitter__button'>Add Post</button>
            </div>
        </form>

    )
}
