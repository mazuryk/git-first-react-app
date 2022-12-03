import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/state.js"



const MyPosts = (props) => {

  const postsElement =
    props.Posts.map(el => <Post message={el.post} like={el.likesCount} />);

  const newPostElement = React.createRef(); //метод, який створює посилання

  const addPosts = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  } 

  const onPostChange = () =>{
    const text = newPostElement.current.value;
    //props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={styleCss.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange ={onPostChange} ref={newPostElement} value={props.newPostText} /> {/* прив'язали посилання до елемента  */}
        </div>
        <div>
          <button onClick={ addPosts }>Add post</button> {/* повісили оброботчик кліку  */} 
        </div>
      </div>
      <div className={styleCss.posts}>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
