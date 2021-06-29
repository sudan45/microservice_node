import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CreateComment from '../Commentcomponents/CreateComment';
import ListComment from '../Commentcomponents/ListComment';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data);
    }
    useEffect(() => {
        fetchPosts();
    }, [])

    const renderPost = Object.values(posts).map(posts => {
        return (


            <div
                className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={posts.id}
            >
                <div className="card-body">
                    <h3>{posts.title}</h3>
                    <ListComment postId={posts.id} />
                    <CreateComment postId={posts.id} />
                </div>
            </div>

        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPost}
        </div>
    )
}





