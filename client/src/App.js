import React from 'react'
import CreatePost from './Postcomponents/CreatePost'
import PostList  from './Postcomponents/PostList'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="container">
            <h1> Create the Post </h1>
            <CreatePost />
            <PostList />
        </div>

    )
}