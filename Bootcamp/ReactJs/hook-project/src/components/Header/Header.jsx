import React, { useContext } from "react";
import Navs from "./Navs";
import Search from "./Search";
import Logo from "./Logo";
import AuthContext from "../../store/auth-state";

const Header = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <header className="bg-cyan-900 flex justify-between items-center py-2 px-3 font-nunito">
      <Logo />
      {authContext.isLoggedIn && <Search />}
      {authContext.isLoggedIn && <Navs />}
    </header>
  );
};

export default Header;
