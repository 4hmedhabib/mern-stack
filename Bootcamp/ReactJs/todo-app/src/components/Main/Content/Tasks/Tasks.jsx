import Task from "./Task";
import { PlusIcon } from "@heroicons/react/solid";
import Empty from "../../../Empty/Empty";

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

      <div className="border-b pb-2 mb-3 max-w-lg w-full mt-5 gap-3 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-left  font-bold text-2xl ">Tasks</h1>
        <div className="flex  items-center gap-3">
          <div className="flex flex-col">
            <label className="text-sm text-gray-400" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="px-2 py-1 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-400" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              id="category"
              required
              className="rounded-md px-2 py-1 outline-none"
            >
              <option value="all">All</option>
              <option value="work">Work</option>
              <option value="learning">Learning</option>
              <option value="trip">Trip</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
      </div>
      <div
        id="lists"
        className="w-full flex flex-col justify-center items-center"
      >
        {tasks.length > 0 ? (
          tasks.map((task) => {
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
