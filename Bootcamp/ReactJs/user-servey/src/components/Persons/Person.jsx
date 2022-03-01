import React, { Fragment } from "react";
import Card from "../UI/Card";
import Wrapper from "../../Helpers/Wrapper";

const Person = (props) => {
  return (
    <Fragment>
      <Card>
        <div className="relative inline-block mb-2">
          <h1 className="text-lg font-bold tracking-wider">
            {props.person.fullName}
          </h1>
          <span className="bg-blue-500 px-2 rounded-full text-white tracking-wider text-xs absolute top-2 -right-16">
            {props.person.username}
          </span>
        </div>
        <h5 className="font-semibold tracking-wider">{props.person.email}</h5>
        <div className="bg-yellow-500 w-10 h-10 rounded-full flex justify-center items-center  mt-2">
          <span className="text-white font-semibold">{props.person.age}</span>
        </div>
      </Card>
    </Fragment>
  );
};

export default Person;
