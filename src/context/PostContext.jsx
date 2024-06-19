// src/contexts/PostContext.js
import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [addPostFlag, setAddPostFlag] = useState(false);
  const [editable, setEditable] = useState(false);
  const [dbUpdateFlag, setDbUpdateFlag] = useState(false);
  const [selectedPost, setSelectedPost] = useState({
    id: 111,
    title: "Happiness",
    author: "John Cena",
    content: "",
  });

  const changeDbFlag = () => {
    setDbUpdateFlag(!dbUpdateFlag);
  };

  const changeAddPostFlag = () => {
    setAddPostFlag(!addPostFlag);
  };

  const onPostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <PostContext.Provider
      value={{
        addPostFlag,
        editable,
        dbUpdateFlag,
        selectedPost,
        setAddPostFlag,
        setEditable,
        setDbUpdateFlag,
        setSelectedPost,
        changeDbFlag,
        changeAddPostFlag,
        onPostClick,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
