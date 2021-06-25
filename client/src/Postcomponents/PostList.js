import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CreateComment from '../Commentcomponents/CreateComment';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data);
    }
    useEffect(() => {
        fetchPosts();
    },[ ])

    const renderPost = Object.values(posts).map(posts => {
        return (

            <div className="card" key={posts.id}>

                <div className="card-body">
                    <h3>{posts.title}</h3>
                    <CreateComment postId={posts.id} />
                    <hr />
                </div>
            </div>

        )
    })

    return (
        <div>
            <hr />
            <h2> POST</h2>
            {renderPost}
        </div>
    )
}