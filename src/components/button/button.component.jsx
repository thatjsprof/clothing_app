import React from "react";
import "./button.styles.scss";

const Button = ({ children, customClass = '', ...props }) => {
  return (
    <button className={`${customClass} custom-button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
