import React from "react";
import Card from "../UI/Card";
import Person from "./Person";
import styles from "./PersonLists.module.css";

const PersonLists = (props) => {
  return (
    <div className={styles.personLists}>
      <Card>
        {props.persons.map((person) => {
          return <Person key={person.id} person={person} />;
        })}
      </Card>
    </div>
  );
};

export default PersonLists;
