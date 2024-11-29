import { useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";
import Answer from "./Answer";
import axios from "axios";
import StudyInfo from "../components/StudyInfo";

function InputTab() {
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useState([]);
  const scrollRef = useRef(null);
  
  //Descer a barra de rolagem a cada atualização
  const scrollToBottom = ()=>{
    setTimeout(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
  }

  // Função para lidar com o envio da pergunta
  const handleSend = async () => {
    if (inputValue.trim()) {
      const questionText = inputValue.trim();
      setQuestions([...questions, { text: questionText, isUser: true }]);
      setInputValue("");

      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { text: "*Processando...*", isUser: false},
      ]);

      scrollToBottom();

      try {
        // Requisição para o backend
        const response = await axios.post(
          "http://127.0.0.1:8000/estudar_assunto",
          {
            question: questionText,
          }
        );

        // Obter resposta da API e adicionar ao estado
        const answer = response.data.resposta;
        setQuestions((prevQuestions) =>
        prevQuestions.map((msg, index) =>
          index === prevQuestions.length - 1
            ? { text: answer, isUser: false}
            : msg
        )
        
      );
      scrollToBottom();
    
      } catch (error) {
        console.error("Erro ao buscar resposta da API:", error);
        setQuestions((prevQuestions) =>
          prevQuestions.map((msg, index) =>
            index === prevQuestions.length - 1
              ? { text: "Erro ao obter resposta.", isUser: false}
              : msg
          )
        );
      }
    }
  };

  return (
    <div className="flex items-center w-screen pt-20 h-screen justify-center overflow-hidden">
      <div className="w-screen flex flex-col  items-center h-full">
        <div className="flex flex-col w-full overflow-y-auto h-full mb-16">
          <StudyInfo />

          <div>
            {/* Contêiner de mensagens com rolagem */}
            <div className="flex justify-center mb-3 w-full bg-transparent rounded-lg">
              <div className="flex flex-col w-1/2">
                {questions.map((message, index) => (
                  <div
                    key={index}
                    className={`my-2 max-w-full w-auto break-words ${
                      message.isUser ? "self-end" : "self-start"
                    }`}
                  >
                    {message.isUser ? (
                      <div className="p-2 self-end bg-purple-900 text-white rounded-3xl my-2">
                        <p className="text-xs">{message.text}</p>
                      </div>
                    ) : (
                      <Answer message={message.text} />
                    )}
                  </div>
                ))}
                <div ref={scrollRef}/>
              </div>
            </div>
          </div>
        </div>
        {/* Campo de entrada */}
        <div className="flex items-center bg-[#E1DDE5] rounded-full h-10 w-1/2 shadow-md justify-between fixed bottom-2 mb-4">
          <input
            placeholder="Digite algo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                handleSend();
              }}}
            className="bg-transparent flex-1 pl-8 text-xs border-transparent focus:ring-0 focus:outline-none focus:border-transparent"
          />
          <Button
            onClick={handleSend}
            className="bg-[#C9BCD6] rounded-full h-7 p-2 mr-2 flex items-center justify-center hover:bg-[#baaec5] focus-outline-none"
          >
            <IonIcon icon={send} className="size-4 text-[#592899]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InputTab;
