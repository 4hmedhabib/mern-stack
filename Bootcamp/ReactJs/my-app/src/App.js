import "./App.css";
import Hello from "./Hello";
import Header from "./Header";
import UseState from "./useState";
import Form from "./Form";

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
      <br></br>
      <br></br>
      <br></br>
      <UseState />
      <br />
      <br />
      <br />
      <Form />
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
