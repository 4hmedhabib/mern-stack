import Header from "./Header";
import Content from "./Content/Content";

const Main = (props) => {
  const uploadDataHandler = (data) => {
    props.onUploadData(data);
  };

  console.log(props.tasks);

  return (
    <section id="main" className="grow font-nunito">
      <Header></Header>
      <Content onUploadData={uploadDataHandler} tasks={props.tasks}></Content>
    </section>
  );
};

export default Main;
