import { BellIcon } from "@heroicons/react/outline";
import TasksCompleted from "./TasksCompleted/TasksCompleted";

const Right = (props) => {
  return (
    // Right Side
    <aside
      id="right"
      className="hidden lg:block lg:w-80 xl:w-full max-w-lg shadow-gray-200 shadow-lg rounded-tr-lg bg-white max-h-screen overflow-y-auto"
    >
      <div className="px-3 py-4 shadow-xl mb-9 shadow-gray-100 flex justify-between items-center">
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5  rounded-full text-xs flex justify-center items-center text-white">
            16
          </span>
          <BellIcon className="w-7 text-slate-600" />
        </div>
        <div className="flex items-center gap-3 bg-slate-50 px-3 py-2 rounded-md ">
          <span className=" text-lg font-semibold font-nunito text-slate-900">
            Hamse Hassan
          </span>
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=199"
            alt=""
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      <TasksCompleted
        onDeleteTaskComplete={props.onDeleteTaskComplete}
        onUndoTask={props.onUndoTask}
        data={props.data}
      />
    </aside>
  );
};

export default Right;
