import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import axios from "axios";
import Answer from "./Answer";

function InputTab() {
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useState([]);

  // Função para lidar com o envio da pergunta
  const handleSend = async () => {
    if (inputValue.trim()) {
      const questionText = inputValue.trim();
      setQuestions([...questions, { text: questionText, isUser: true }]);
      setInputValue("");

      try {
        // Requisição para o backend
        const response = await axios.post(
          "http://127.0.0.1:8000/erro_no_codigo",
          {
            question: questionText,
          }
        );

        // Obter resposta da API e adicionar ao estado
        const answer = response.data.resposta;
        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { text: answer, isUser: false },
        ]);
      } catch (error) {
        console.error("Erro ao buscar resposta da API:", error);
      }
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-screen flex justify-center mb-12">
      <div className="w-screen flex flex-col items-center">
        {/* Renderizar as perguntas acima do input */}
        <div className="flex justify-center w-screen h-[470px] overflow-y-auto bg-transparent rounded-lg">
          <div className="flex flex-col w-1/2">
            {questions.map((message, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={`my-2 max-w-full w-auto break-words ${
                  message.isUser ? "self-end" : "self-start"
                }`}
              >
                {message.isUser ? (
                  <div className="p-3 self-end bg-purple-900 text-white rounded-3xl my-2">
                    <p className="text-lg">{message.text}</p>
                  </div>
                ) : (
                  <Answer message={message.text} />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Campo de entrada */}
        <div className="flex items-center gap-4 bg-[#E1DDE5] rounded-full h-14 w-1/2 shadow-md justify-between">
          <input
            placeholder="Digite algo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent flex-1 pl-8 size-14 border-transparent focus:ring-0 focus:outline-none focus:border-transparent"
          />
          <Button
            onClick={handleSend}
            className="bg-[#C9BCD6] rounded-full h-11 w-11 mr-3 flex items-center justify-center hover:bg-[#baaec5] focus-outline-none"
          >
            <IonIcon icon={send}
            className="text-[#592899] size-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InputTab;
