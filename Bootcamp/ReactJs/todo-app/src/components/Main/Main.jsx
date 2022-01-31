import Header from "./Header";
import Content from "./Content/Content";

const Main = (props) => {
  console.log("Main Props", props);

  return (
    <section id="main" className="grow font-nunito">
      <Header></Header>
      <Content tasks={props.tasks}></Content>
    </section>
  );
};

export default Main;
