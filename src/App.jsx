import React, { useState } from "react";
import Header from "./components/Header";
import Toggle from "./components/Toggle";
import Card from "./components/Card";
import Table from "./components/Table";
import Footer from "./components/Footer";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardName, setSelectedCardName] = useState("");

  const handleToggle = (value) => {
    setIsToggled(value);
  };

  const handleCardSelect = (id, plan) => {
    setSelectedCardId(id);
    setSelectedCardName(plan);
  };

  const handleSelectedPlan = () => {
    selectedCardName ? alert(selectedCardName) : alert("Please choose a plan");
  };

  return (
    <>
      <div className="lg:mx-80">
        <Header />
        <div className="mt-[40px]">
          <Toggle handleToggle={handleToggle} />
        </div>
        <div className="lg:flex mt-[20px]">
          <div className="lg:w-1/2">
            <Card onCardSelect={handleCardSelect} isToggled={isToggled} />
          </div>
          {isToggled && (
            <div className="lg:w-1/2">
              <Table
                selectedCardName={selectedCardName}
                selectedCardId={selectedCardId}
              />
            </div>
          )}
        </div>
        {isToggled && <Footer handleSelectedPlan={handleSelectedPlan} />}
      </div>
    </>
  );
};

export default App;
