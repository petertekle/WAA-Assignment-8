// src/components/PostDetails.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";

const PostDetails = ({}) => {
  // const { id } = selectedPost;
  // console.log(id);

  const { selectedPost, setEditable, changeDbFlag } = useContext(PostContext);

  const [postDetails, setPostDetails] = useState(selectedPost);

  const fetchSelectedPost = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/posts/${selectedPost.id}`)
      .then((response) => setPostDetails(response.data))
      .catch((error) => console.log(error.message));
  };

  //only if selected post changes, fetch the Selected post
  useEffect(() => {
    fetchSelectedPost();
  }, [selectedPost]);

  //   const history = useNavigate();
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/v1/posts/${selectedPost.id}`)
      .then(() => {
        // const updatedPosts = posts.filter((p) => p.id !== post.id);
        // setPosts(updatedPosts);
        // history.push("/");
        setEditable(false);
        changeDbFlag();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h2>Post Details</h2>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
            <h4>
              Title: <span className='fw-normal'>{postDetails?.title}</span>
            </h4>
          </div>
          <div className='mb-3'>
            <h4>
              Author: <span className='fw-normal'>{postDetails?.author}</span>
            </h4>
          </div>
          <div className='mb-3'>
            <h4>
              Content: <span className='fw-normal'>{postDetails?.content}</span>
            </h4>
          </div>
          <button
            type='button'
            className='btn btn-primary me-2'
            onClick={() => setEditable(true)}
          >
            Edit
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
