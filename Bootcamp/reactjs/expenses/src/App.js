import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: "i1",
      name: "New Mobile",
      status: "Pending",
      amount: 499,
      date: "2022-01-03",
    },
    {
      id: "i2",
      name: "Macbook Prop",
      status: "Paid",
      amount: 1844,
      date: "2021-12-03",
    },
    {
      id: "i1",
      name: "Hisense Tv",
      status: "Paid",
      amount: 350,
      date: "2020-10-03",
    },
  ];

  return (
    <>
      <div id="container" className="flex bg-sky-50">
        <AsideLeft></AsideLeft>
        <main className="grow">
          <Expenses expenses={expenses}></Expenses>
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default App;
