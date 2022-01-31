import "./Hello.css";

const Hello = (props) => {
  return (
    <div>
      <p className="hello">Hello, Mr/Mrs {props.property}</p>
    </div>
  );
};

export default Hello;
