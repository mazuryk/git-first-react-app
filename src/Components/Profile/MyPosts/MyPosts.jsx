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
        <Post message='Hi, how are you?' like='15' />
        <Post message="It's is my first post" like ="20"/>
      </div>
    </div>
  );
};

export default MyPosts;
