import { ClipboardCheckIcon } from "@heroicons/react/outline";
import React from "react";
import Empty from "../../../Empty/Empty";
import TaskComplete from "./TaskComplete";

const TasksCompleted = (props) => {
  const tasksCompleted = props.data.filter((task) => task.isCompleted === true);

  const isUndoTask = (id) => {
    props.onUndoTask(id);
  };

  const deleleTaskCompeleted = (id) => {
    props.onDeleteTaskComplete(id);
  };

  return (
    <section id="completed-tasks" className="mt-5 mx-2 p-2 font-nunito">
      <div className="flex items-center mb-2">
        <ClipboardCheckIcon className="w-6 h-6 text-yellow-500" />
        <h1 className="text-xl font-bold ml-2 tracking-wider text-gray-400">
          Tasks Completed
        </h1>
      </div>
      <hr />

      <div>
        {tasksCompleted.length > 0 ? (
          tasksCompleted.map((task) => (
            <TaskComplete
              key={task.id}
              id={task.id}
              title={task.title}
              category={task.category}
              date={task.date}
              status={task.status}
              onUndoTask={isUndoTask}
              onDeleteTask={deleleTaskCompeleted}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default TasksCompleted;
