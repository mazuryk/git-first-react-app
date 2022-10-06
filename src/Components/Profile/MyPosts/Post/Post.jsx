import React from "react";
import styleCss from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styleCss.item}>
      <img src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
