import React, { useContext } from "react";
import AuthContext from "../../store/auth-state";

const Navs = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <div id="navs" className="hidden sm:block">
      <ul className="flex justify-between items-center">
        <li className="text-white  font-semibold mx-2">User</li>
        <li className="text-white  font-semibold  mx-2">Admin</li>
        <li>
          <button
            onClick={authCtx.logout}
            className="bg-cyan-50 text-cyan-900 px-5 py-2 rounded-lg shadow-lg shadow-gray-700 mx-2 hover:text-lg font-bold tracking-wider"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navs;
