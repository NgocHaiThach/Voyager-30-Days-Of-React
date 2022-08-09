import React, { useContext } from 'react'
import TwitterItem from '../TwitterItem/TwitterItem'
import { TweetsContext } from '../TwitterTweets'

export default function TwitterListPost({ arrPost }) {
    // const { arrPost } = useContext(TweetsContext)
    return (
        <div>
            {arrPost.map((post, index) => (
                <TwitterItem post={post} key={index} />
            ))}
        </div>
    )
}
