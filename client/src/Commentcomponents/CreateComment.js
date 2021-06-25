import axios from 'axios';
import React, { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postId }) => {
    const [content, setContent] = useState('');
    const onSubmit = async event => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comment`, {
            content
          });
      
          setContent('');
        };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label> new comment</label>
                    <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary"> Submit</button>
            </form>
        </div>
    )

}







