import { useState } from "react";
import AddPerson from "./components/AddPerson";
import UserLists from "./components/UserLists";

const App = () => {
  const [userLists, setUserLists] = useState([]);

  const createPersonHandler = (data) => {
    const id = Math.random() * 1000;
    setUserLists((prevPersons) => {
      return [
        ...prevPersons,
        {
          id: id,
          ...data,
        },
      ];
    });
  };

  return (
    <section className="bg-blue-50 h-screen w-screen font-nunito">
      <AddPerson onAddPerson={createPersonHandler} />
      <UserLists users={userLists} />
    </section>
  );
};

export default App;
