import React from "react";
import n from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={n.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
