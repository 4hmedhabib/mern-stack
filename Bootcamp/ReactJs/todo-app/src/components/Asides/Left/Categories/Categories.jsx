import React from "react";
import {
  AcademicCapIcon,
  ChartPieIcon,
  GlobeIcon,
  CakeIcon,
  BriefcaseIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
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
    <section id="overview" className="px-3 m-3 mt-14 hidden xl:block">
      <div className="flex gap-2">
        <ChartPieIcon className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-bold capitalize tracking-wider  text-gray-400 mb-2">
          Tasks Categories
        </h1>
      </div>
      <hr />
      <div id="list" className="mt-5">
        <Category
          title="General"
          total={general.length}
          color="#2563eb"
          icon={<ViewGridIcon className="w-5" />}
        />
        <Category
          title="Sports"
          total={sports.length}
          color="#65a30d"
          icon={<GlobeIcon className="w-5" />}
        />
        <Category
          title="Learning"
          total={learning.length}
          color="#0891b2"
          icon={<AcademicCapIcon className="w-5" />}
        />
        <Category
          title="Trip"
          total={trip.length}
          color="#ca8a04"
          icon={<CakeIcon className="w-5" />}
        />
        <Category
          title="Work"
          total={work.length}
          color="#e11d48"
          icon={<BriefcaseIcon className="w-5" />}
        />
      </div>
    </section>
  );
};

export default Categories;
