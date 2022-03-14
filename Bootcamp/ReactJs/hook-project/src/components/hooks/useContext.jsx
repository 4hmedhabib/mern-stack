import { Fragment, createContext, useState, useContext } from "react";

const UserContextId = createContext();

const UseContext1 = () => {
  const [userId, setUserId] = useState("U0010");

  return (
    <UserContextId.Provider value={userId}>
      <Fragment>
        <h1>Hello, Your ID is : {userId} from UseContext Component</h1>
        <Component1 />
      </Fragment>
    </UserContextId.Provider>
  );
};

const Component1 = (props) => {
  return <Component2 />;
};

const Component2 = (props) => {
  return <Component3 />;
};

const Component3 = (props) => {
  return <Component4 />;
};

const Component4 = (props) => {
  const userIdCtx = useContext(UserContextId);

  console.log(userIdCtx);

  return <h1>Hello, Your ID is : {userIdCtx} from Component 4</h1>;
};

export default UseContext1;
