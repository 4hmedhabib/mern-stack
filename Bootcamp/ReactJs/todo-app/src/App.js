import { useState } from "react";

import Right from "./components/Asides/Right/Right";
import Left from "./components/Asides/Left/Left";
import Main from "./components/Main/Main";

const App = () => {
  const data = [
    {
      id: "t-01",
      title: "Going Work",
      date: "2022-01-01",
      category: "Work",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: "t-02",
      title: "Building Web Application",
      date: "2022-02-01",
      category: "Work",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: "t-03",
      title: "Going Daallo Mountain",
      date: "2022-01-01",
      category: "Trip",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: "t-04",
      title: "Playing Football",
      date: "2022-02-01",
      category: "Sports",
      status: "completed",
      isCompleted: true,
    },
    {
      id: "t-05",
      title: "Going University",
      date: "2022-01-01",
      category: "Learning",
      status: "in progress",
      isCompleted: false,
    },
    {
      id: "t-06",
      title: "Learning MERN Stack Bootcamp",
      date: "2022-01-01",
      category: "Learning",
      status: "in progress",
      isCompleted: false,
    },
  ];

  // Tesks data
  const [tasks, setTasks] = useState(data);

  const saveTaskHandler = (data) => {
    setTasks((prevState) => {
      return [...prevState, data];
    });
  };

  const taskCompletedHandler = (taskId) => {
    setTasks((prevState) => {
      const task = prevState.find((task) => task.id === taskId);

      const taskUpdate = {
        ...task,
        isCompleted: true,
        status: "completed",
      };

      const taskIndex = prevState.findIndex((task) => task.id === taskId);

      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;

      return prevUpdate;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevState) => {
      const prevUpdate = prevState.filter((task) => task.id !== taskId);

      return prevUpdate;
    });
  };

  const undoTaskHandler = (taskId) => {
    setTasks((prevState) => {
      const task = prevState.find((task) => task.id === taskId);

      const taskUpdate = {
        ...task,
        isCompleted: false,
        status: "in progress",
      };

      const taskIndex = prevState.findIndex((task) => task.id === taskId);

      const prevUpdate = [...prevState];
      prevUpdate[taskIndex] = taskUpdate;

      return prevUpdate;
    });
  };

  const deleteTaskComplete = (taskId) => {
    setTasks((prevState) => {
      const prevUpdate = prevState.filter((task) => task.id !== taskId);

      return prevUpdate;
    });
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <Left data={tasks}></Left>
      <Main
        onUploadData={saveTaskHandler}
        tasks={tasks}
        onTaskCompleted={taskCompletedHandler}
        onDeleteTask={deleteTaskHandler}
      ></Main>
      <Right
        onDeleteTaskComplete={deleteTaskComplete}
        onUndoTask={undoTaskHandler}
        data={tasks}
      ></Right>
    </div>
  );
};

export default App;
