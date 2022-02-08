import { useState } from "react";
import Tasks from "./Tasks/Tasks";
import Form from "./Form/Form";

const Content = (props) => {
  const [showForm, setShowForm] = useState(false);

  const addTaskHandler = (data) => {
    const id = Math.floor(Math.random() * 1000);

    const taskData = {
      id: `t-${id}`,
      title: data.title,
      category: data.category,
      status: data.status,
      date: data.date,
      isCompleted: false,
    };

    props.onUploadData(taskData);
  };

  const isTaskCompleted = (id) => {
    props.onTaskCompleted(id);
  };

  const isTaskDeleted = (id) => {
    props.onDeleteTask(id);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    // Main
    <main className="bg-white card-white relative">
      {showForm === true ? (
        <Form onAddTask={addTaskHandler} onCloseForm={closeFormHandler} />
      ) : (
        ""
      )}
      <Tasks
        showForm={showForm}
        onShowForm={showFormHandler}
        data={props.tasks}
        isTaskCompleted={isTaskCompleted}
        isTaskDeleted={isTaskDeleted}
      />
    </main>
  );
};

export default Content;
