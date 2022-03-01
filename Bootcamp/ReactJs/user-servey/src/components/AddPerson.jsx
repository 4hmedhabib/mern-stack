import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./AddPerson.module.css";
import ErrorModal from "./UI/ErrorModal";

const AddPerson = (props) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState(null);

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
      return setError({
        title: "Error Full Name",
        content: "Fadlan, gali magacaaga oo dhamaystiran",
      });
    }

    if (username.trim().length <= 0) {
      return setError({
        title: "Error Username",
        content: "Fadlan, gali username kaaga.",
      });
    }

    if (email.trim().length <= 0) {
      return setError({
        title: "Error Email",
        content: "Fadlan, gali email kaaga oo dhamaystiran.",
      });
    }

    if (age.trim().length <= 0) {
      return setError({
        title: "Error Age",
        content: "Fadlan, gali da'daada.",
      });
    }

    if (age <= 15) {
      return setError({
        title: "Error Age",
        content: "Fadlan, waxa la ogalyahay kaliya qof ka wayn 15 jir.",
      });
    }

    const data = {
      fullName,
      email,
      username,
      age,
    };

    props.onAddPerson(data);
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <>
      {error !== null ? (
        <ErrorModal
          title={error.title}
          content={error.content}
          onClose={closeModal}
        />
      ) : (
        ""
      )}
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
    </>
  );
};

export default AddPerson;
