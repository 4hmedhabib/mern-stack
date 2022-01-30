import Right from "./components/Asides/Right";
import Left from "./components/Asides/Left";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <Left></Left>
      <Main></Main>
      <Right></Right>
    </div>
  );
};

export default App;
