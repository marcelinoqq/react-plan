import React from "react";

const Footer = ({ handleSelectedPlan }) => {
  return (
    <>
      <div className="flex lg:justify-end mt-[20px] justify-center">
        <button
          className="bg-[#EB2F06] text-white font-bold py-2 px-12 rounded-xl"
          onClick={handleSelectedPlan}
        >
          Choose Plan
        </button>
      </div>
    </>
  );
};

export default Footer;
