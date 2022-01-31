import Tasks from "./Tasks/Tasks";
import Form from "./Form/Form";

const Content = (props) => {
  console.log("Content Props", props);

  return (
    // Main
    <main className="bg-white card-white relative">
      <Form />
      <Tasks data={props.tasks} />
    </main>
  );
};

export default Content;
