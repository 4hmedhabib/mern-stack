import Right from "./components/Asides/Right";
import Left from "./components/Asides/Left";
import Main from "./components/Main/Main";

const App = () => {
  const tasks = [
    {
      id: "t-01",
      title: "Going Work",
      date: "2022-01-01",
      category: "Work",
      status: "in progress",
    },
    {
      id: "t-02",
      title: "Learning MERN Stack Bootcamp",
      date: "2022-02-01",
      category: "Learning",
      status: "completed",
    },
  ];

  console.log("App ", tasks);

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <Left></Left>
      <Main tasks={tasks}></Main>
      <Right></Right>
    </div>
  );
};

export default App;
