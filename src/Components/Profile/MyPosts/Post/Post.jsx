import React from "react";
import n from "./Post.module.css";

const Post = () => {
  return (
    <div className={n.item}>
      <img src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
