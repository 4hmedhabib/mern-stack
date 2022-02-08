import Header from "./Header";
import Content from "./Content/Content";

const Main = (props) => {
  const uploadDataHandler = (data) => {
    props.onUploadData(data);
  };

  return (
    <section id="main" className="grow font-nunito">
      <Header></Header>
      <Content
        onUploadData={uploadDataHandler}
        tasks={props.tasks}
        onTaskCompleted={props.onTaskCompleted}
        onDeleteTask={props.onDeleteTask}
      ></Content>
    </section>
  );
};

export default Main;
