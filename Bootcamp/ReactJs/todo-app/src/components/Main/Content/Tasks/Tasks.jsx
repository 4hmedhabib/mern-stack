import { useState } from "react";
import Task from "./Task";
import { PlusIcon } from "@heroicons/react/solid";
import Empty from "../../../Empty/Empty";
import Filter from "./Filter";

const Tasks = (props) => {
  const [category, setCategory] = useState("all");
  const [date, setDate] = useState("");

  const changeCategoryHandler = (category) => {
    setCategory(category);
  };

  const changeDateHandler = (date) => {
    setDate(date);
  };

  const tasks = props.data.filter((task) => task.isCompleted === false);

  const filterByCategory = tasks.filter((task) =>
    category === "all"
      ? task
      : task.category.toLowerCase() === category.toLocaleLowerCase()
  );

  const filteredTasks = filterByCategory.filter((task) =>
    date === "" ? task : date === task.date
  );

  return (
    // Tasks
    <div
      id="tasks"
      className="flex flex-col items-center justify-center bg-slate-50 px-4 pt-10 rounded-md relative mt-10"
    >
      {props.showForm === true ? (
        ""
      ) : (
        <div className="absolute z-10 -top-10">
          <button
            onClick={props.onShowForm}
            className="bg-blue-500 w-20 h-20 rounded-full flex justify-center items-center border-8 border-white"
          >
            <PlusIcon className="w-10 h-10 text-white"></PlusIcon>
          </button>
        </div>
      )}

      <Filter
        onChangeCategory={changeCategoryHandler}
        category={category}
        onChangeDate={changeDateHandler}
        date={date}
      />

      <div
        id="lists"
        className="w-full flex flex-col justify-center items-center"
      >
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                category={task.category}
                date={task.date}
                status={task.status}
                isTaskCompleted={props.isTaskCompleted}
                isTaskDeleted={props.isTaskDeleted}
              />
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Tasks;
