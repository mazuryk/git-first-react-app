import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import n from './Profile.module.css';

const Profile = () => {
  return (
    <div className={n.content}>
      <div>
        <img className={`${n.content} ${n.wallpappers}`} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;

