import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";

function InputTab() {
  // Estado para armazenar o valor do input
  const [inputValue, setInputValue] = useState("");
  // Estado para armazenar as perguntas enviadas
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
      <div className="w-full flex flex-col items-center">
        {/* Renderizar as perguntas acima do input */}
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

        <div className="flex items-center gap-4 bg-[#E1DDE5] rounded-full h-14 w-1/2 shadow-md justify-between">
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
      </div>
    </div>
  );
}

export default InputTab;
