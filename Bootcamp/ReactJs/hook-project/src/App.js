import { Fragment, useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import AuthContext from "./store/auth-state";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <main>
        {authCtx.isLoggedIn && <Home />}
        {!authCtx.isLoggedIn && <Login />}
      </main>
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
    </Fragment>
  );
};

export default App;
