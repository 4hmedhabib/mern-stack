import React from "react";

const Category = (props) => {
  return (
    <div className="shadow bg-white px-3 py-1 rounded-lg flex items-center justify-between my-4">
      <div className="flex">
        <div
          style={{ background: props.color }}
          className="w-2  ml-1 mr-3 rounded-full"
        ></div>
        <div>
          <h2 style={{ color: props.color }} className="text-lg font-bold">
            {props.title}
          </h2>
          <span className="text-xs ml-1 mt-1 text-gray-400">
            {props.total} Tasks
          </span>
        </div>
      </div>
      <div
        style={{ background: props.color }}
        className="w-10 h-10  rounded-full flex justify-center items-center"
      >
        <span className="text-white font-semibold">{props.icon}</span>
      </div>
    </div>
  );
};

export default Category;
