import { useState } from "react";
import InputTab from "./InputTabExplain";
import Funcao1Button from "./Funcao1Button";
import Funcao2Button from "./Funcao2Button";

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
      <div className="w-screen">
        <div className="w-1/2 ">
          <InputTab
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSubmit={handleInputSubmit}
          />
          {isVisible && (
            <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-1">
              <Funcao1Button onFuncao1Click={handleFuncao1Click} />
              <Funcao2Button onFuncao2Click={handleFuncao2Click} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ExplainButtonContainer;
