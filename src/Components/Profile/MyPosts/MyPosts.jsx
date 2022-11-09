import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Posts from "../../..";

const MyPosts = (props) => {

  const postsElement =
    props.Posts.map(el => <Post message={el.post} like={el.likesCount} />);

  const newPostElement = React.createRef(); //метод, який створює посилання

  const addPost = () => {
    const text = newPostElement.current.value ;//current посилається на нативний html елемент
    alert(text)
  } 

  return (
    <div className={styleCss.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} ></textarea> {/* прив'язали посилання до елемента  */}
        </div>
        <div>
          <button onClick={ addPost }>Add post</button> {/* повісили оброботчик кліку  */} 
        </div>
      </div>
      <div className={styleCss.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
