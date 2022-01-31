import { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("Running");

  const changeName = () => {
    setName("Stopped");
  };

  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={changeName}>Stop Me</button>
    </div>
  );
};

export default UseState;
