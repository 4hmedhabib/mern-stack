import { useState } from "react";
import AddPerson from "./components/Persons/AddPerson";
import PersonLists from "./components/Persons/PersonList";

const App = () => {
  const [personLists, setPersonLists] = useState([]);

  const createPersonHandler = (data) => {
    const id = Math.random() * 1000;
    setPersonLists((prevPersons) => {
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
      <PersonLists persons={personLists} />
    </section>
  );
};

export default App;
