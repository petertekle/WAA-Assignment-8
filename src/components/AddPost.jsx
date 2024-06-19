import axios from "axios";
import React, { useContext, useRef } from "react";
import { PostContext } from "../context/PostContext";

const AddPost = () => {
  const { changeAddPostFlag, changeDbFlag } = useContext(PostContext);

  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const publishPost = () => {
    const updatePost = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
    };
    axios
      .post(`http://localhost:8080/api/v1/posts`, updatePost)
      .then((response) => {
        changeDbFlag();
        changeAddPostFlag();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-header'>
            <h2>Add Post</h2>
          </div>
          <label htmlFor='Title'>Title:</label>
          <input type='text' ref={titleRef} placeholder='Enter Title' />
          <label htmlFor='Author'>Author:</label>
          <input type='text' ref={authorRef} placeholder='Enter Author' />
          <label htmlFor='Content'>Content:</label>
          <input type='text' ref={contentRef} placeholder='Enter Content' />
          <div>
            <button
              type='button'
              className='btn btn-primary me-2 mt-2'
              onClick={publishPost}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
