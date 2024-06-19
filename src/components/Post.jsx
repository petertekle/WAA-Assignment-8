import React from "react";
import "../css/Post.css";

const Post = ({ id, title, author, post, onPostClick }) => {
  return (
    <div className='post' onClick={() => onPostClick(post)}>
      <h2 className='post-title'>{title}</h2>
      <p className='post-author'>Author: {author}</p>
      <p className='post-id'>ID: {id}</p>
    </div>
  );
};

export default Post;
