import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="Avatar">
      <img
        className="AvatarImage"
        src="public/assets/images/AvatarImage.png"
        alt="AvatarImage"
      ></img>
    </div>
  );
};

export default Avatar;
