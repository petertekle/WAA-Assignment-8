import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostContext } from "../context/PostContext";

const Posts = () => {
  const [posts, setPosts] = useState([
    // { id: 111, title: "Happiness", author: "John Cena" },
    // { id: 112, title: "Success", author: "Dwayne Johnson" },
    // { id: 113, title: "Motivation", author: "Bruce Lee" },
    // { id: 114, title: "Courage", author: "Broc Lee" },
  ]);

  const { onPostClick, dbUpdateFlag } = useContext(PostContext);

  const fetchPosts = async () => {
    await axios
      .get("http://localhost:8080/api/v1/posts")
      .then((response) => {
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setPosts(sortedData);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchPosts();
  }, [dbUpdateFlag]);

  return (
    <div className='container'>
      <div className='row'>
        {posts.map((post) => (
          <div className='col' key={post.id}>
            <Post
              post={post}
              onPostClick={onPostClick}
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
