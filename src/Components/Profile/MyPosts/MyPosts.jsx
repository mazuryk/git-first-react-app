import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styleCss.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styleCss.posts}>
        <Post message="Hi, how are you?" like="15" />
        <Post message="It's is my first post" like="20" />
      </div>
    </div>
  );
};

export default MyPosts;
