import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div
      id="search"
      className="mx-5 sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full"
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
  );
};

export default Search;
