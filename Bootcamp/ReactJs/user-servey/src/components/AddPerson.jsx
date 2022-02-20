import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./AddPerson.module.css";

const AddPerson = () => {
  return (
    <div className={styles.addPerson}>
      <Card>
        <form>
          <div className={styles.input_group}>
            <label htmlFor="fullname" className={styles.input_label}>
              Full Name :
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className={styles.input_control}
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
