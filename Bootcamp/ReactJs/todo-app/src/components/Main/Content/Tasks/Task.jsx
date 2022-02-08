import { CheckIcon } from "@heroicons/react/solid";
import { CalendarIcon, TrashIcon } from "@heroicons/react/outline";

const Task = (props) => {
  const taskCompleted = () => {
    props.isTaskCompleted(props.id);
  };

  const taskDeleted = () => {
    props.isTaskDeleted(props.id);
  };

  return (
    // task 1
    <div
      id="task"
      className="card-white border-l-4 border-blue-500 flex justify-between items-center  max-w-lg w-full font-nunito relative"
    >
      <div id="left-side">
        <div id="category">
          <h5 className="font-semibold text-blue-600 capitalize">
            {props.category}
          </h5>
        </div>
        <div id="content" className="mt-1 ">
          <h1 className="text-xl font-bold tracking-wider">{props.title}</h1>
          <div className="flex mt-3 gap-1 mb-8">
            <CalendarIcon className="w-5 h-5 text-gray-600"></CalendarIcon>
            <span className="text-sm text-gray-600">{props.date}</span>
          </div>
          <div className="absolute bottom-2">
            <span className="capitalize font-bold tracking-wider text-yellow-500">
              {props.status}
            </span>
          </div>
        </div>
      </div>
      <div id="right-side" className="flex flex-col gap-3">
        <CheckIcon
          className="w-6 h-6 cursor-pointer text-green-500"
          onClick={taskCompleted}
        ></CheckIcon>
        <TrashIcon
          className="w-6 h-6 cursor-pointer text-red-500"
          onClick={taskDeleted}
        ></TrashIcon>
      </div>
    </div>
  );
};

export default Task;
