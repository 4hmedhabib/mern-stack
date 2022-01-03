import ExpensesDate from "./ExpensesDate";
import CardItem from "./CardItem";
import Wrap from "../hoc/Wrap";

const ExpensesItem = (props) => {
  return (
    <Wrap>
      {" "}
      <Wrap>
        <CardItem>
          {" "}
          <h3 className="w-5/12">{props.name} </h3>
          <span className="w-2/12">{props.status}</span>
          <span className="w-2/12"> {props.amount} </span>
          <ExpensesDate date={props.date}></ExpensesDate>
        </CardItem>
      </Wrap>
      <Wrap>
        <CardItem>
          {" "}
          <h3 className="w-5/12">{props.name} </h3>
          <span className="w-2/12">{props.status}</span>
          <span className="w-2/12"> {props.amount} </span>
          <ExpensesDate date={props.date}></ExpensesDate>
        </CardItem>
      </Wrap>
    </Wrap>
  );
};

export default ExpensesItem;
