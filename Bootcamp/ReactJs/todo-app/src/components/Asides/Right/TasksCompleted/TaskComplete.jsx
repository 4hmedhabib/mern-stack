import { ReplyIcon } from "@heroicons/react/solid";
import { CalendarIcon, TrashIcon } from "@heroicons/react/outline";

const TaskComplete = (props) => {
  const isUndoTask = () => {
    props.onUndoTask(props.id);
  };

  const isDeletTask = () => {
    props.onDeleteTask(props.id);
  };

  return (
    // task 1
    <div
      id="task"
      className="card-white border-l-4 border-blue-500 flex justify-between items-center  max-w-lg w-full font-nunito relative opacity-80 line-through"
    >
      <div id="left-side" className="w-full px-2">
        <div
          id="category"
          className="flex justify-between items-center  w-full"
        >
          <h5 className="font-semibold text-blue-600">{props.category}</h5>
          <div className="flex gap-1">
            <CalendarIcon className="w-5 h-5 text-gray-600"></CalendarIcon>
            <span className="text-sm text-gray-600">{props.date}</span>
          </div>
        </div>
        <div id="content" className="mt-1 mb-8">
          <h1 className="text-xl font-bold tracking-wider">{props.title}</h1>
          <div className="absolute bottom-2 left-0 right-0 w-full">
            <div className="flex justify-between w-full px-4">
              <span className="capitalize font-bold tracking-wider text-yellow-500">
                {props.status}
              </span>
              <div className="flex gap-2">
                <span
                  className="flex gap-1 text-blue-500 hover:bg-blue-600 hover:text-white px-2 cursor-pointer  hover:rounded-full"
                  onClick={isUndoTask}
                >
                  <ReplyIcon className="w-5 h5 " /> Undo
                </span>
                <span
                  className="flex gap-1 text-red-500 hover:bg-red-600 hover:text-white px-2 cursor-pointer  hover:rounded-full"
                  onClick={isDeletTask}
                >
                  <TrashIcon className="w-5 h5 " /> Remove
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComplete;
