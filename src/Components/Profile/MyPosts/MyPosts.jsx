import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Posts from "../../..";

const MyPosts = (props) => {

  const postsElement =
    props.Posts.map(el => <Post message={el.post} like={el.likesCount} />);


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
