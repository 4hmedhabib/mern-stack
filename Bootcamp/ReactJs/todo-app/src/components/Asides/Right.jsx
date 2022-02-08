import TasksCompleted from "./TasksCompleted/TasksCompleted";

const Right = (props) => {
  return (
    // Right Side
    <aside
      id="right"
      className="hidden lg:block lg:w-80 xl:w-full max-w-lg shadow-gray-200 shadow-lg rounded-tr-lg bg-white"
    >
      <TasksCompleted onUndoTask={props.onUndoTask} data={props.data} />
    </aside>
  );
};

export default Right;
