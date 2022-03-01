import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    setEmailIsValid(email.includes("@"));
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordIsValid(password.trim().length >= 6);
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onLogin(email, password);
  };

  return (
    <div className={classes.login}>
      <Card>
        <h1 className={classes.login_header}>Login</h1>
        <form
          className={classes.login_form}
          onSubmit={submitHandler}
          noValidate
        >
          <div className={classes.input_group}>
            <label htmlFor="email" className={classes.input_label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={classes.input_control}
              onChange={emailChangeHandler}
              value={email}
            />
          </div>
          <div className={classes.input_group}>
            <label htmlFor="" className={classes.input_label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={classes.input_control}
              onChange={passwordChangeHandler}
              value={password}
            />
          </div>
          <div className={classes.btn_container}>
            <Button
              style={formIsValid ? " " : " opacity-25 cursor-not-allowed"}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
