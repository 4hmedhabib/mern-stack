import React, { useState, useEffect, useReducer } from "react";
import { act } from "react-dom/test-utils";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const initEmail = {
  value: "",
  isValid: false,
  isBlured: false,
};

const emailReducer = (state, action) => {
  if (action.type === "EMAILCHANGE") {
    return {
      value: action.payload,
      isValid: action.payload.includes("@"),
      isBlured: state.isBlured,
    };
  }
  if (action.type === "EMAILBLUR") {
    return {
      value: state.value,
      isValid: action.payload.includes("@"),
      isBlured: true,
    };
  }

  return initEmail;
};

const Login = (props) => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, emailDispatch] = useReducer(emailReducer, initEmail);

  // password.trim().length >= 6

  useEffect(() => {
    setFormIsValid(email.isValid);
  }, [email]);

  const emailChangeHandler = (e) => {
    emailDispatch({ type: "EMAILCHANGE", payload: e.target.value });
    // setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(email, password);
  };

  const emailBlurHandler = (e) => {
    emailDispatch({ type: "EMAILBLUR", payload: e.target.value });
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
              className={
                formIsValid === false && email.isBlured
                  ? classes.input_control_error
                  : classes.input_control
              }
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={email.value}
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
              disabled={!formIsValid}
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
