import Left from "./components/Asides/Left";
import Right from "./components/Asides/Right";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen">
      <Right></Right>
      <Main></Main>
      <Left></Left>
    </div>
  );
};

export default App;
