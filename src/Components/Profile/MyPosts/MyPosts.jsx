import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, post: "Як справи, світе?", likesCount : 15 },
    { id: 2, post: "Це мій порший пост!", likesCount : 30 }
  ];

  const postsElement =
    posts.map(el => <Post message={el.post} like={el.likesCount} />);


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
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
