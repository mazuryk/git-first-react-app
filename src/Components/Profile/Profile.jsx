import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      Posts={props.profileState.Posts}
      addPost={props.addPost}
      updateNewPostText = {props.updateNewPostText}
      newPostText={props.profileState.newPostText}
      />
    </div>
  );
};

export default Profile;

