import TasksCompleted from "./TasksCompleted/TasksCompleted";

const Right = () => {
  return (
    // Right Side
    <aside
      id="right"
      className="hidden lg:block lg:w-80 xl:w-full max-w-lg shadow-gray-200 shadow-lg rounded-tr-lg bg-white"
    >
      <TasksCompleted />
    </aside>
  );
};

export default Right;
