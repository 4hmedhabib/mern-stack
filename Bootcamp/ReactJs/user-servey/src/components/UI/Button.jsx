import React from "react";

const Button = (props) => {
  return (
    <button className="mx-auto bg-blue-500 text-white py-2 px-3 rounded-lg w-full">
      {props.children}
    </button>
  );
};

export default Button;
