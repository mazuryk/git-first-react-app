import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // debugger
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      Posts={props.profileState.Posts}
      newPostText={props.profileState.newPostText}
      dispatch = {props.dispatch}
      />
    </div>
  );
};

export default Profile;

