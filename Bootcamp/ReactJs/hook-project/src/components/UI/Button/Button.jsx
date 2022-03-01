import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, style, ...rest }) => {
  return (
    <button className={classes.btn + " " + style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
