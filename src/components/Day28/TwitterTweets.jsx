import React, { createContext, useEffect, useState } from 'react';
import './TwitterTweets.css';
import ControlInput from './ControlInput/ControlInput'
import TwitterListPost from './TwitterListPost/TwitterListPost';

export const TweetsContext = createContext();
export default function TwitterTweets() {
    const listPost = [
        {
            id: 1,
            edit: false,

            content: '30 Days Of React challenge has been started on 1 October and still ongoing. It will end the 30 October 2020. It was a real challenge for everyone. Students learned quite a lot of concepts. I hope this will help lots of students.'
        },
        {
            id: 2,
            edit: false,
            content: '30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. I hope this will help lots of students. JavaScript for Ever!'
        },
        {
            id: 3,
            edit: false,
            content: '30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists and aspiring ML. Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend'
        },
        {
            id: 4,
            edit: false,
            content: '30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020. It is of the best references for Pythonistas, data scientists, and aspiring ML. Students learned quite a lot of concepts. Python is eating the world'
        },
        {
            id: 5,
            edit: false,
            content: 'I have no idea about the coming challenge. It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.'
        },
    ]

    const [arrPost, setArrPost] = useState(listPost);

    const handleAddPost = (post) => {

        setArrPost([...arrPost, {
            id: arrPost.length + 1,
            content: post
        }])
    }

    const handleDeletePost = (id) => {
        const newArr = [...arrPost];
        const deleArr = newArr.filter(item => item.id !== id);
        setArrPost(deleArr)
    }

    const handleUpdatePost = (id, content) => {
        const newState = arrPost.map(obj => {
            if (obj.id === id) {
                return { id: id, content: content, edit: false };
            }
            return obj;
        });
        setArrPost(newState)
    }
    return (
        <div className='twiter-wrapper'>
            <TweetsContext.Provider value={{ arrPost, handleAddPost, handleDeletePost, handleUpdatePost }}>
                <ControlInput />
                <TwitterListPost />
            </TweetsContext.Provider>
        </div>
    )
}
