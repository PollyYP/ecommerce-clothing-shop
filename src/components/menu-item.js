import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/menu-item.styles.scss";

const MenuItem = ({ title, titleImage, size, linkUrl }) => {
  const { push } = useHistory();

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${titleImage})`,
        }}
      />
      <div className="content" onClick={() => push(linkUrl)}>
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
