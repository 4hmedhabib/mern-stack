import React, { useState, useEffect, useReducer, useContext } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-state";

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
      isValid: state.value.includes("@"),
      isBlured: true,
    };
  }

  return initEmail;
};

const initPassword = {
  value: "",
  isValid: false,
  isBlured: false,
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORDCHANGE") {
    return {
      value: action.payload,
      isValid: action.payload.trim().length >= 6,
      isBlured: state.isBlured,
    };
  }
  if (action.type === "PASSWORDBLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length >= 6,
      isBlured: true,
    };
  }

  return initPassword;
};

const Login = (props) => {
  const authPro = useContext(AuthContext);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, emailDispatch] = useReducer(emailReducer, initEmail);

  const [password, passwordDispatch] = useReducer(
    passwordReducer,
    initPassword
  );

  const { isValid: emailIsValid } = email;
  const { isValid: passwordIsValid } = password;

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    emailDispatch({ type: "EMAILCHANGE", payload: e.target.value });
    // setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    passwordDispatch({ type: "PASSWORDCHANGE", payload: e.target.value });
    // setPassword(e.target.value);
  };

  const emailBlurHandler = (e) => {
    emailDispatch({ type: "EMAILBLUR" });
  };

  const passwordBlurHandler = (e) => {
    passwordDispatch({ type: "PASSWORDBLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authPro.login(email, password);
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
                email.isValid === false && email.isBlured
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
              className={
                password.isValid === false && password.isBlured
                  ? classes.input_control_error
                  : classes.input_control
              }
              onChange={passwordChangeHandler}
              value={password.value}
              onBlur={passwordBlurHandler}
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
