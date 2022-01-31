import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("Hello");
  const [password, setPassword] = useState("password");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changePass = (event) => {
    setPassword(event.target.value);
  };

  const submitHanlder = (event) => {
    event.preventDefault();

    console.log("Your data", {
      name,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={submitHanlder}>
        <label htmlFor="">Name : </label>
        <input type="text" name="name" value={name} onChange={changeName} />
        <br />
        <label htmlFor="">Passw : </label>
        <input
          type="text"
          name="password"
          value={password}
          // onChange={(event) => setPassword(event.target.value)}
          // onChange={(event) => changePass(event)}
          onChange={changePass}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
