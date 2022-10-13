import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, post: "Як справи, світе?", likesCount : 15 },
    { id: 2, post: "Це мій порший пост!", likesCount : 30 }
  ];


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
        <Post message={postsData[0].post} like={postsData[0].likesCount} />
        <Post message={postsData[1].post} like={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
