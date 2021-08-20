import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, size, imageUrl, history, url, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        history.push(`${match.url}${url}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
