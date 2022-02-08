import React from "react";

const Category = (props) => {
  return (
    <div className="shadow bg-white px-3 py-1 rounded-lg flex items-center justify-between my-4">
      <div className="flex">
        <div className="w-2 bg-yellow-600 ml-1 mr-3 rounded-full"></div>
        <div>
          <h2 className="text-lg font-bold text-yellow-600">{props.title}</h2>
          <span className="text-xs ml-1 mt-1 text-gray-400">
            {props.total} Tasks
          </span>
        </div>
      </div>
      <div className="w-10 h-10 bg-yellow-600 rounded-full flex justify-center items-center">
        <span className="text-white font-semibold">{props.total}</span>
      </div>
    </div>
  );
};

export default Category;
