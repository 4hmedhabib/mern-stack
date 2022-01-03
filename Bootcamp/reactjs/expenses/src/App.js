import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import ExpensesItem from "./components/ExpensesItem";

const App = () => {
  const id = "#002";
  const name = "New Mobile";
  const status = "Pending";
  const amount = 499;
  const date = "2021-01-01";
  return (
    <>
      <div id="container" className="flex bg-sky-50">
        <AsideLeft></AsideLeft>
        <main className="grow">
          <div className="bg-white mx-8 mt-5 shadow shadow-sky-100 px-8 py-5">
            <h1 className="font-[700] tracking-wider font-nunito">
              Expenses History
            </h1>

            <div className="mt-5 bg-gray-50 px-4 py-8 rounded-lg">
              <ExpensesItem
                name={name}
                status={status}
                amount={amount}
                date={date}
                id={id}
              ></ExpensesItem>
            </div>
          </div>
        </main>
        <AsideRight />
      </div>
    </>
  );
};

export default App;
