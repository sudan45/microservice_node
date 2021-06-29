import axios from 'axios';
import React, { useEffect, useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postId }) => {
    const [comments, setComment] = useState([]);

    const fetchComment = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comment`)
        console.log(res)
        setComment(res.data)
    }

    useEffect(() => {
        fetchComment()
    },[])

    const renderComment = Object.values(comments).map(comments => {
        return (
            <li key={comments.id}>{comments.content}</li>
        )

    })

    return (
        <div>
            {renderComment}
        </div>
    )

}


