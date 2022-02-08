import React from "react";
import Category from "./Category";

const Categories = (props) => {
  const general = props.data.filter((task) => task.isCompleted === false);
  const sports = props.data.filter(
    (task) =>
      task.category.toLowerCase() === "sports" && task.isCompleted === false
  );
  const learning = props.data.filter(
    (task) =>
      task.category.toLowerCase() === "learning" && task.isCompleted === false
  );
  const trip = props.data.filter(
    (task) =>
      task.category.toLowerCase() === "trip" && task.isCompleted === false
  );
  const work = props.data.filter(
    (task) =>
      task.category.toLowerCase() === "work" && task.isCompleted === false
  );

  return (
    <section id="overview" className="px-3 m-3 mt-20">
      <h1 className="text-xl font-bold capitalize tracking-wider  text-gray-400 mb-2">
        Categories
      </h1>
      <hr />
      <div id="list" className="mt-5">
        <Category title="General" total={general.length} color="#2563eb" />
        <Category title="Sports" total={sports.length} color="#65a30d" />
        <Category title="Learning" total={learning.length} color="#0891b2" />
        <Category title="Trip" total={trip.length} color="#ca8a04" />
        <Category title="Work" total={work.length} color="#e11d48" />
      </div>
    </section>
  );
};

export default Categories;
