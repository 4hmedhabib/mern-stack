const ExpensesItem = (props) => {
  return (
    <div className="flex justify-between items-center font-semibold tracking-wider bg-secondary px-4 py-3 rounded-lg shadow-md text-white mb-3">
      <span>{props.id}</span>
      <h3>{props.name} </h3>
      <span>{props.status}</span>
      <span> {props.amount} </span>
      <span className="bg-white text-secondary px-3 py-1 rounded-full ">
        {props.date}
      </span>
    </div>
  );
};

export default ExpensesItem;
