import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UseContext from "./components/hooks/useContext";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
    </Fragment>
  );
};

export default App;
