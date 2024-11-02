import React, { useState } from 'react';
import InputTab from "./InputTabExplain";
import Funcao1Button from './Funcao1Button';
import Funcao2Button from './Funcao2Button';

function ExplainButtonContainer() {
    const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState(""); // Mova o estado para cá, se precisar controlar o valor do input

  const handleFuncao1Click = () => {
    setInputValue("Me explique o comando println()");
  };
  const handleFuncao2Click = () => {
    setInputValue("Me explique o comando sort()");
  };
  const handleInputSubmit = () => {
    setIsVisible(false);
};

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 w-3/5 flex justify-center p-2 space-x-4 ml-8">
          <Funcao1Button onFuncao1Click = {handleFuncao1Click}/>
          <Funcao2Button onFuncao2Click={handleFuncao2Click} />
        </div>
      )}
      <InputTab inputValue={inputValue} setInputValue={setInputValue} onSubmit={handleInputSubmit}/>
    </>
  );
}

export default ExplainButtonContainer;
