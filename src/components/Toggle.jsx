import React from "react";

const Toggle = ({ handleToggle }) => {
  const handleChange = (event) => {
    handleToggle(event.target.checked);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleChange}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#16a085]"></div>
        <span className="ml-3 text-sm font-medium text-[#0C2461]">
          Monthly Plan
        </span>
      </label>
    </>
  );
};

export default Toggle;
