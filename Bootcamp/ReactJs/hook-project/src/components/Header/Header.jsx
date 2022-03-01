import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-cyan-900 flex justify-between items-center py-2 px-3 font-nunito">
      <div
        id="logo"
        className="bg-white h-16 w-16 rounded-lg shadow-md shadow-gray-600"
      >
        <img
          src="https://brandlogos.net/wp-content/uploads/2014/11/google-developers-logo.png"
          alt="logo"
        />
      </div>
      <div
        id="search"
        className="mx-5 md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full"
      >
        <div className="relative bg-cyan-50 rounded-md h-10 w-full">
          <input
            type="text"
            className="w-full h-full rounded-md pl-8 pr-5 outline-none"
          />
          <span className="absolute top-3 left-1 z-10 cursor-pointer">
            <SearchIcon className="w-5 h-5 text-cyan-900" />
          </span>
        </div>
      </div>
      <div id="navs">
        <ul className="flex justify-between items-center">
          <li className="text-white text-lg font-bold mx-2">User</li>
          <li className="text-white text-lg font-bold  mx-2">Admin</li>
          <li>
            <button className="bg-cyan-50 text-cyan-900 px-5 py-2 rounded-lg shadow-lg shadow-gray-700 mx-2">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
