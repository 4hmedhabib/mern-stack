import { ExclamationIcon } from "@heroicons/react/outline";
import React from "react";

const Empty = () => {
  return (
    <div className="my-4 flex flex-col items-center justify-center opacity-80">
      <ExclamationIcon className="text-gray-400 w-16 h-16" />
      <h1 className="text-2xl p-3 font-nunito font-bold tracking-wider text-gray-400">
        No Data Found
      </h1>
    </div>
  );
};

export default Empty;
