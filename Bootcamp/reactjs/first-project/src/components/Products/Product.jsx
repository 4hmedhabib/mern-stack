const Product = (props) => {
  return (
    <div className="card">
      <div className="my-4 text-center flex flex-col items-center">
        <img src={props.imageUrl} alt="" className="h-auto w-60" />
        <h6 className="font-bold text-2xl text-black">{props.name}</h6>
        <p className="text-green-600">{props.description}</p>
        <p className="bg-green-500 px-3 text-white py-1 rounded-xl mt-2">
          Quantity: {props.quantity}
        </p>
      </div>
      <span className="bg-green-500 px-2 py-1 rounded-xl text-white absolute top-3 right-5">
        {props.price}
      </span>
      <div className="w-full ">
        <button className="bg-green-500 rounded-b-lg text-white px-2 py-3 w-full">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
