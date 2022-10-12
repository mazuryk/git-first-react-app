import React from "react";
import styleCss from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={`${styleCss.wallpappers}`}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
      <div className={styleCss.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
