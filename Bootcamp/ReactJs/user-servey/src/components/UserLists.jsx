import React from "react";
import Card from "./UI/Card";
import User from "./User";
import styles from "./UserLists.module.css";

const UserLists = (props) => {
  return (
    <div className={styles.userLists}>
      <Card>
        {props.users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </Card>
    </div>
  );
};

export default UserLists;
