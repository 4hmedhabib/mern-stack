import React, { useDeferredValue } from "react";

const Products = ({ products }) => {
  const data = useDeferredValue(products);

  return data.map((product, idx) => (
    <div
      key={idx}
      className="bg-white shadow mx-auto mt-16 px-3 py-2 rounded-lg w-full max-w-md mb-2"
    >
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-500">
        <span className=" text-white font-semibold">{product.id}</span>
      </div>
      <h1 className="text-lg font-bold tracking-wider capitalize mt-5">
        {product.title}
      </h1>
      <p className="text-slate-500 tracking-wider truncate">{product.body}</p>
    </div>
  ));
};

export default Products;
