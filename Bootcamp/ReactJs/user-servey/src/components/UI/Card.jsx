const Card = (props) => {
  return (
    <div
      id="card"
      className="bg-white px-6 py-4 rounded-md shadow-lg shadow-slate-500/10 my-3 w-full"
    >
      {props.children}
    </div>
  );
};

export default Card;
