import React from "react";
import n from './Profile.module.css';


const Profile = () => {
  return (
    <div className={n.content}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div>ava</div>
      <div>new post</div>
      <div className={n.item}>post 1</div>
      <div className='item'>post 2</div>
    </div>
  );
};

export default Profile;

