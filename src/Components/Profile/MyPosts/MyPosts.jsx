import React from "react";
import styleCss from "./MyPosts.module.css";
import Post from "./Post/Post";
// import Posts from "../../..";

const MyPosts = (props) => {

  const postsElement =
    props.Posts.map(el => <Post message={el.post} like={el.likesCount} />);

  const newPostElement = React.createRef(); //метод, який створює посилання

  const addPosts = () => {
    //props.addPost();
    props.dispatch({ type: 'ADD-POST'});
  } 

  const onPostChange = () =>{
    const text = newPostElement.current.value;
    //props.updateNewPostText(text);
    let action= {
      type: 'UPDATE-NEW-POST_TEXT', 
      newText: text
    }
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
