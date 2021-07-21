import React from "react";
import "./button.styles.scss";

const Button = ({ children, customClass = '', inverted, ...props }) => {
  return (
    <button className={`${inverted ? 'inverted': ''} ${customClass} custom-button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
