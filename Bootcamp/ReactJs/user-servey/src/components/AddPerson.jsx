import React, { useState, useRef } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./AddPerson.module.css";

const AddPerson = (props) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  //* useRef is not re-render the page

  //* useState any change in input is re-render the page

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (fullName.trim().length <= 0) {
      return;
    }

    if (username.trim().length <= 0) {
      return;
    }

    if (email.trim().length <= 0) {
      return;
    }

    if (age <= 15) {
      return;
    }

    const data = {
      fullName,
      email,
      username,
      age,
    };

    props.onAddPerson(data);
  };

  return (
    <div className={styles.addPerson}>
      <Card>
        <form onSubmit={submitFormHandler} noValidate>
          <div className={styles.input_group}>
            <label htmlFor="fullname" className={styles.input_label}>
              Full Name :
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className={styles.input_control}
              value={fullName}
              onChange={changeFullName}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="username" className={styles.input_label}>
              Username :
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input_control}
              value={username}
              onChange={changeUsername}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email" className={styles.input_label}>
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input_control}
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="age" className={styles.input_label}>
              Age :
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className={styles.input_control}
              value={age}
              onChange={changeAge}
            />
          </div>
          <div className={styles.button_container}>
            <Button>Save</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddPerson;
