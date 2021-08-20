import React from "react";
import { Button } from "./button.styles";

const CustomButton = ({ children, custom, ...props }) => {
  return (
    <Button className={custom} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
