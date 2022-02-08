import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <section id="overview" className="px-3 m-3 mt-20">
      <h1 className="text-xl font-bold capitalize tracking-wider  text-gray-400 mb-2">
        Categories
      </h1>
      <hr />
      <div id="list" className="mt-5">
        <Category title="General" total="2" />
        <Category title="Sports" total="2" />
        <Category title="Learning" total="2" />
        <Category title="Trip" total="2" />
        <Category title="Work" total="2" />
      </div>
    </section>
  );
};

export default Categories;
