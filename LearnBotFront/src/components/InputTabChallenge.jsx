import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";
import AnswerButton from "./AnswerButton";

function InputTab() {
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useState([]);

  // Função para lidar com o envio da pergunta
  const handleSend = () => {
    if (inputValue.trim()) {
      setQuestions([...questions, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center mb-12">
      <div className="w-full flex flex-col items-center h-screen justify-end">
        {/* Contêiner de mensagens com rolagem */}
        <div className="flex justify-center mb-5 w-full h-[400px] overflow-y-auto bg-transparent rounded-lg">
          <div className="flex flex-col items-end w-1/2">
          {questions.map((question, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="p-3 bg-purple-900 rounded-3xl my-2 max-w-full w-auto break-words"
              style={{ wordWrap: "break-word", maxWidth: "60%" }}
            >
              <p className="text-lg text-white px-4">{question}</p>
            </div>
          ))}
          </div>
          
        </div>

        <div className="flex flex-row align-middle justify-center gap-5">
          <div className="flex items-center gap-4 bg-[#E1DDE5] rounded-full h-14 w-[780px] shadow-md justify-between">
            <input
              placeholder="Digite algo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent flex-1 pl-8 size-14 border-transparent focus:ring-0 focus:outline-none focus:border-transparent"
            />
            <Button
              onClick={handleSend}
              className="bg-[#C9BCD6] rounded-full h-10 w-10 mr-3 flex items-center justify-center hover:bg-[#baaec5] focus-outline-none"
            >
              <IonIcon icon={sendSharp} className="size-6 text-[#592899]" />
            </Button>
          </div>
          <AnswerButton />
        </div>
      </div>
    </div>
  );
}

export default InputTab;
