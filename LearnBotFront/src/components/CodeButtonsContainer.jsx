import React, { useState } from 'react';
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
      {isVisible && (
        <div className="fixed bottom-0 w-full flex justify-center p-4 space-x-4">
          <MelhoriaButton onMelhoriaClick = {handleMelhoriaClick}/>
          <DebugButton onDebugClick={handleDebugClick} />
        </div>
      )}
      <InputTab inputValue={inputValue} setInputValue={setInputValue} onSubmit={handleInputSubmit}/>
    </>
  );
}

export default CodeButtonContainer;
