import React from "react";
import Card from "./UI/Card";

const User = (props) => {
  return (
    <div>
      <Card>
        <div className="relative inline-block mb-2">
          <h1 className="text-lg font-bold tracking-wider">
            {props.user.fullName}
          </h1>
          <span className="bg-blue-500 px-2 rounded-full text-white tracking-wider text-xs absolute top-2 -right-24">
            {props.user.username}
          </span>
        </div>
        <h5 className="font-semibold tracking-wider">{props.user.email}</h5>
        <div className="bg-yellow-500 w-10 h-10 rounded-full flex justify-center items-center  mt-2">
          <span className="text-white font-semibold">{props.user.age}</span>
        </div>
      </Card>
    </div>
  );
};

export default User;
