import React from 'react';
import PostCreate from './PostComponets/PostCreate'
import PostList from './PostComponets/PostList';

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
