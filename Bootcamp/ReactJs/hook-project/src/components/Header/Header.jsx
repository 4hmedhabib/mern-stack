import React from "react";
import Navs from "./Navs";
import Search from "./Search";
import Logo from "./Logo";

const Header = (props) => {
  return (
    <header className="bg-cyan-900 flex justify-between items-center py-2 px-3 font-nunito">
      <Logo />
      {props.isLoggedIn && <Search />}
      {props.isLoggedIn && <Navs onLogout={props.onLogout} />}
    </header>
  );
};

export default Header;
