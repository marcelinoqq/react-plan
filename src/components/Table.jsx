import React from "react";
import Svg from "./Svg";

const Table = ({ selectedCardName, selectedCardId }) => {
  const tableDetails = [
    { id: 1, feature: "All Limited Links", icon: <Svg /> },
    { id: 2, feature: "Own Analytic Platform", icon: <Svg /> },
    { id: 3, feature: "Chat Support", icon: <Svg /> },
    { id: 4, feature: "Optimize Hashtag", icon: <Svg /> },
    { id: 5, feature: "Unlimited User", icon: <Svg /> },
  ];

  return (
    <div className="lg:ml-[10px] mx-[5px]">
      <div className="h-[385px] mt-[20px] shadow border border-[#16a085] rounded-2xl">
        <div className="flex h-1/5 bg-[#16a085] shadow rounded-t-2xl">
          <div className="w-1/2 my-auto text-white ml-[60px]">Details</div>
          <div className="w-1/2 my-auto text-center text-white font-bold text-xl">
            {selectedCardName}
          </div>
        </div>

        {tableDetails.map((item) => (
          <div
            key={item}
            className={`${
              selectedCardId >= item.id - 1 && selectedCardId !== null
                ? "text-[#0C2461]"
                : "text-gray-700"
            }`}
          >
            <div>
              <div className={`flex mt-[20px]`} key={item.id}>
                <div
                  className={`w-1/2 ml-[60px] font-bold text-sm lg:text-base`}
                >
                  {item.feature}
                </div>
                <div className={`w-1/2 flex justify-center`}>{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
