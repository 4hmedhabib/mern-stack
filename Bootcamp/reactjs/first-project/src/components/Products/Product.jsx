const Product = () => {
  return (
    <div className="card">
      <div className="my-4 text-center flex flex-col items-center">
        <img src="/images/Apples.jpeg" alt="" className="h-auto w-60" />
        <p>This is a product description</p>
      </div>
      <span className="bg-green-500 px-2 py-1 rounded-xl text-white absolute top-3 right-5">
        $13.99
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
