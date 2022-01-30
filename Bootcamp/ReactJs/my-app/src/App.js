import "./App.css";
import Hello from "./Hello";
import Header from "./Header";
import React from "react";

// Components
//  Class Component
//  Functional Component

const App = () => {
  const person1 = "Gaadhi";
  const person2 = "Guri";
  const person3 = "Meherad";

  return (
    <div className="App">
      <Header></Header>
      <Hello property={person1}></Hello>
      <Hello property={person2}></Hello>
      <Hello property={person3}></Hello>
    </div>
  );
};

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Hello />{" "}
//       </div>
//     );
//   }
// }

// export default App;
