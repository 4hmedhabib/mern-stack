import Tasks from "./Tasks/Tasks";
import Form from "./Form/Form";

const Content = (props) => {
  const addTaskHandler = (data) => {
    const id = Math.floor(Math.random() * 1000);

    const taskData = {
      id: `t-${id}`,
      title: data.title,
      category: data.category,
      status: data.status,
      date: data.date,
    };

    props.onUploadData(taskData);
  };

  return (
    // Main
    <main className="bg-white card-white relative">
      <Form onAddTask={addTaskHandler} />
      <Tasks data={props.tasks} />
    </main>
  );
};

export default Content;
