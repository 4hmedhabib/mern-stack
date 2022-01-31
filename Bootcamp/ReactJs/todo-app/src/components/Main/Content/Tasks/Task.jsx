import { CheckIcon } from "@heroicons/react/solid";
import { CalendarIcon, TrashIcon } from "@heroicons/react/outline";

const Task = () => {
  return (
    // task 1
    <div
      id="task"
      className="card-white border-l-4 border-blue-500 flex justify-between items-center  max-w-lg w-full"
    >
      <div id="left-side">
        <div id="category">
          <h5 className="font-semibold text-blue-600">Learning</h5>
        </div>
        <div id="content" className="mt-1">
          <h1 className="text-xl font-bold tracking-wider">
            Learning Mern Stack
          </h1>
          <div className="flex mt-3 gap-1">
            <CalendarIcon className="w-5 h-5 text-gray-600"></CalendarIcon>
            <span className="text-sm text-gray-600">2021-12-01</span>
          </div>
        </div>
      </div>
      <div id="right-side" className="flex flex-col gap-3">
        <CheckIcon className="w-6 h-6 cursor-pointer text-green-500"></CheckIcon>
        <TrashIcon className="w-6 h-6 cursor-pointer text-red-500"></TrashIcon>
      </div>
    </div>
  );
};

export default Task;
