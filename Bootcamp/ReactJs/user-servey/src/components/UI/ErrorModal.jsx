import React from "react";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      id="backdrop"
      className={styles.backdrop}
      onClick={props.onClose}
    ></div>
  );
};

const Modal = (props) => {
  return (
    <div id="modal" className={styles.modal}>
      <Card>
        <div>
          <div className={styles.title}>
            <h1>{props.title}</h1>
          </div>
          <div className={styles.content}>
            <p>{props.content}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.btn} onClick={props.onClose}>
              Okay
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <div id="error-modal">
      <Backdrop onClose={props.onClose} />
      <Modal
        title={props.title}
        content={props.content}
        onClose={props.onClose}
      />
    </div>
  );
};

export default ErrorModal;
