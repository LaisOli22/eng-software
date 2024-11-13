import React, { useState } from "react";
import DebugButton from "./DebugButton";
import MelhoriaButton from "./MelhoriaButton";
import InputTab from "./InputTabCode";

function CodeButtonContainer() {
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState(""); // Mova o estado para cá, se precisar controlar o valor do input

  const handleDebugClick = () => {
    setInputValue("Preciso de ajuda para debugar meu código");
  };
  const handleMelhoriaClick = () => {
    setInputValue("Preciso de ajuda para melhorar meu código.");
  };
  const handleInputSubmit = () => {
    setIsVisible(false);
  };

  return (
    <>
    <div className="w-full">
      <div className="w-1/2">
        {isVisible && (
          <div className="fixed justify-center bottom-16 w-3/5 flex left-9 self-start space-x-2 mb-1">
            <MelhoriaButton onMelhoriaClick={handleMelhoriaClick} />
            <DebugButton onDebugClick={handleDebugClick} />
          </div>
        )}
        <InputTab
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={handleInputSubmit}
        />
      </div>
    </div>
      
    </>
  );
}

export default CodeButtonContainer;
