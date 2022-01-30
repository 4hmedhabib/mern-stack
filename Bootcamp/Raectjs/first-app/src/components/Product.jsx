const Product = (props) => {
  return (
    <div
      id="card"
      className="shadow bg-white w-80 relative rounded-md mb-10 flex flex-col justify-between"
    >
      <div className="m-3 flex justify-center">
        <img src={props.img} className="w-48 h-auto" alt="image" />
      </div>
      <div className="px-3 mb-5 flex justify-center flex-col">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl tracking-wide font-bold mb-2">
            {props.title}
          </h3>
          <span className="bg-green-500 text-white px-1 ml-3 rounded-full">
            {props.quantity}
          </span>
        </div>
        <p className="text-sm capitalize text-center text-gray-500 ">
          {props.description}
        </p>
      </div>
      <div className="bg-green-500 inline-block text-white rounded-md px-3 py-1 absolute top-3 left-3">
        <span className="text-lg font-bold tracking-wide">${props.price}</span>
      </div>
      <div className="bg-green-500 py-2 text-center  text-2xl text-white rounded-md">
        <button className="font-bold">Buy</button>
      </div>
    </div>
  );
};

export default Product;
