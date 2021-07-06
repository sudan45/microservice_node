import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'pending') {
      content = 'This Comment is under moderation'
    }

    if (comment.status === 'rejected') {
      content = 'This Comment contain abuse word'
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
