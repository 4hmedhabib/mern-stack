import React from "react";

const Filter = (props) => {
  const changeCategory = (event) => {
    props.onChangeCategory(event.target.value);
  };

  const changeDate = (event) => {
    props.onChangeDate(event.target.value);
  };

  return (
    <div className="border-b pb-2 mb-3 max-w-lg w-full mt-5 gap-3 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-left  font-bold text-2xl ">Tasks</h1>
      <div className="flex  items-center gap-3">
        <div className="flex flex-col">
          <label className="text-sm text-gray-400" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="px-2 py-1 rounded-md outline-none"
            onChange={changeDate}
            value={props.date}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-400" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            required
            className="rounded-md px-2 py-1 outline-none"
            onChange={changeCategory}
            value={props.category}
          >
            <option value="all">All</option>
            <option value="work">Work</option>
            <option value="learning">Learning</option>
            <option value="trip">Trip</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
