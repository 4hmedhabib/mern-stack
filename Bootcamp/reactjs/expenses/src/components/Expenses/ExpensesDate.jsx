const ExpensesDate = (props) => {
  return (
    <span className="bg-secondary text-white text-sm px-3 py-1 rounded-full max-w-3/12 ">
      {props.date}
    </span>
  );
};

export default ExpensesDate;
