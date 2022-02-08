import Task from "./Task";

const Tasks = (props) => {
  const tasks = props.data;

  return (
    // Tasks
    <div
      id="tasks"
      className="flex flex-col items-center justify-center bg-slate-50 px-4 pt-10 rounded-md"
    >
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
              title={task.title}
              category={task.category}
              date={task.date}
              status={task.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
