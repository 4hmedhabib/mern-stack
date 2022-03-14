import { Fragment, useContext, useState } from "react";

const UseContext = () => {
  const [userId, setUserId] = useState("U0010");

  return (
    <Fragment>
      <h1>Hello, Your ID is : {userId} from UseContext Component</h1>
      <Component1 userId={userId} />
    </Fragment>
  );
};

const Component1 = (props) => {
  return <Component2 userId={props.userId} />;
};

const Component2 = (props) => {
  return <Component3 userId={props.userId} />;
};

const Component3 = (props) => {
  return <Component4 userId={props.userId} />;
};

const Component4 = (props) => {
  return <h1>Hello, Your ID is : {props.userId} from Component 4</h1>;
};

export default UseContext;
