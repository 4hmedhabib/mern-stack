import React, { useReducer } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { MinusIcon } from "@heroicons/react/solid";
import classes from "./style.module.css";

const initialValue = {
  count: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return initialValue;
  }
  return initialValue;
};

const UseReducer = () => {
  const [state, dispatcher] = useReducer(reducerFn, initialValue);

  const incrementHandler = () => {
    dispatcher({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatcher({ type: "DECREMENT" });
  };

  const resetHandler = () => {
    dispatcher({ type: "RESET", payload: initialValue });
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <button className={classes.btn} onClick={incrementHandler}>
          <PlusIcon className="w-5 h-5 font-bold" />
        </button>
        <div className={classes.boxValue}>{state.count}</div>
        <button className={classes.btn} onClick={decrementHandler}>
          <MinusIcon className="w-5 h-5 font-bold" />
        </button>
      </div>
      <button className={classes.reset} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
