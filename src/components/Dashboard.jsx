// src/components/Dashboard.js
import React, { useContext, useEffect, useState } from "react";
import "../css/Dashboard.css";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import EditForm from "./EditForm";
import AddPost from "./AddPost";
import { PostContext, PostProvider } from "../context/PostContext";

const Dashboard = () => {
  const {
    addPostFlag,
    setAddPostFlag,
    editable,
    setEditable,
    dbUpdateFlag,
    selectedPost,
    changeDbFlag,
    changeAddPostFlag,
    setSelectedPost,
    onPostClick,
  } = useContext(PostContext);

  // const [addPostFlag, setAddPostFlag] = useState(false);
  // const [editable, setEditable] = useState(false);
  // const [dbUpdateFlag, setDbUpdateFlag] = useState(false);

  // const [selectedPost, setSelectedPost] = useState({
  //   id: 111,
  //   title: "Happiness",
  //   author: "John Cena",
  //   content: "",
  // });
  //
  // const changeFlag = () => {
  //   setDbUpdateFlag(!dbUpdateFlag);
  // };

  // const changeAddPostFlag = () => {
  //   setAddPostFlag(!addPostFlag);
  // };

  // const onPostClick = (post) => {
  //   setSelectedPost(post);
  // };

  return (
    <>
      <button onClick={changeAddPostFlag}>
        {!addPostFlag ? "Add Post" : "Collapse"}
      </button>
      {addPostFlag ? <AddPost></AddPost> : null}
      <div className='dashboard'>
        <h1 className='dashboard-title'>Dashboard</h1>
        <div className='dashboard-cards'>
          <Posts />
        </div>
        {editable ? <EditForm /> : <PostDetails />}
      </div>
    </>
  );
};

// const DashboardWrapper = () => (
//   <PostProvider>
//     <Dashboard />
//   </PostProvider>
// );

export default Dashboard;
