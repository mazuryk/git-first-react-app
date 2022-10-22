import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  let Posts = [
    { id: 1, post: "Як справи, світе?", likesCount : 15 },
    { id: 2, post: "Це мій порший пост!", likesCount : 30 }
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts Posts={Posts} />
    </div>
  );
};

export default Profile;

