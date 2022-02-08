import Task from "./Task";
import { PlusIcon } from "@heroicons/react/solid";

const Tasks = (props) => {
  const tasks = props.data.filter((task) => task.isCompleted === false);

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

      <h1 className="text-left w-full font-bold text-2xl border-b pb-2 mb-3 max-w-lg">
        Lists
      </h1>
      <div
        id="lists"
        className="w-full flex flex-col justify-center items-center"
      >
        {tasks.map((task) => {
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
        })}
      </div>
    </div>
  );
};

export default Tasks;
