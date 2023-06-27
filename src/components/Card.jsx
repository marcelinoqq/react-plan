import React, { useState, useEffect } from "react";
import Svg from "./Svg";

const Card = ({ onCardSelect, isToggled }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!isToggled) {
      setSelectedCard(null);
    }
  }, [isToggled]);

  const handleCardClick = (id, plan) => {
    if (isToggled) {
      if (selectedCard === id) {
        setSelectedCard(null);
        onCardSelect(null, null);
      } else {
        setSelectedCard(id);
        onCardSelect(id, plan);
      }
    }
  };

  const cardDetails = [
    {
      id: 1,
      icon: <Svg />,
      plan: "Base Plan",
      deal: "save 10%",
      price: "$12 /Month",
    },
    {
      id: 2,
      icon: <Svg />,
      plan: "Fuse Plan",
      deal: "save 20%",
      price: "$24 /Month",
    },
    {
      id: 3,
      icon: <Svg />,
      plan: "Extro Plan",
      deal: "save 30%",
      price: "$48 /Month",
    },
    {
      id: 4,
      icon: <Svg />,
      plan: "Universe Plan",
      deal: "save 40%",
      price: "$96 /Month",
    },
  ];

  return (
    <>
      <div className="lg:mr-[10px] mx-[5px]">
        {cardDetails.map((card) => (
          <div
            key={card.plan}
            className={`flex flex-row p-6 mt-[20px] border rounded-2xl shadow 
            ${selectedCard === card.id ? "bg-[#16a085]" : "bg-white"}
            ${
              isToggled
                ? "border-[#16a085] bg-[#16a085]"
                : "border-gray-700 bg-white"
            }`}
            onClick={() => handleCardClick(card.id, card.plan)}
          >
            <div
              className={`flex-shrink my-auto ${
                selectedCard === card.id && isToggled ? "text-white" : ""
              }`}
            >
              {card.icon}
            </div>
            <div
              className={`flex-grow ml-[20px] w-10 lg:text-2xl font-black ${
                !isToggled ? "text-gray-700" : "text-[#0C2461]"
              } ${selectedCard === card.id && isToggled ? "text-white" : ""}`}
            >
              {card.plan}
            </div>
            <div
              className={`lg:flex-grow md:flex-grow flex p-[2px] ${
                isToggled ? "text-[#EB2F06]" : "text-gray-700"
              } ${selectedCard === card.id && isToggled ? "text-white" : ""}`}
            >
              <div
                className={`pl-[10px] pr-[10px] my-auto mx-auto text-sm rounded-xl ${
                  isToggled && selectedCard !== card.id ? "bg-[#FFCFC5]" : ""
                } ${
                  isToggled && selectedCard === card.id ? "bg-[#1CBC9D]" : ""
                }`}
              >
                {card.deal}
              </div>
            </div>
            <div className="relative">
              <div
                className={`flex-shrink lg:text-2xl font-black ${
                  !isToggled ? "text-gray-700" : "text-[#0C2461]"
                }`}
              >
                {card.price.split(" ").map((month, index) => (
                  <span
                    key={index}
                    className={
                      month === "/Month" ? "relative text-sm font-normal" : ""
                    }
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
