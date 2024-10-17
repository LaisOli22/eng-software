import WelcomeButton from "../components/WelcomeButton";

function Home() {
  return (
    <div className="bg-black h-screen bg-pattern bg-cover bg-center">
      <div>
        <div className=" flex items-center justify-center pt-8 text-5xl">
          <h1 className="text-white font-bold">Learn</h1>
          <h1 className="text-[#D3F936] font-500">Bot</h1>
        </div>
        <img
          src="./src/assets/Objetivo_Desenvolvimento_Sustentável_4_PT_01.webp.png"
          alt="LearnBot"
          className="absolute top-0 right-20 w-32 md:w-48 lg:w-28 h-auto mr-6 mt-0"
        />
      </div>

      <div className="flex flex-row justify-around items-center">
        <div className="flex-col items-center max-w-xl ml-72 ">
          <div className="text-[#FFFFFF] text-justify">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Estude quando quiser, a qualquer momento
            </h1>
            <p className="mb-10 text-2xl">
              Desenvolvido para ajudar estudantes nas áreas de Inteligência
              Artificial e Tecnologia a resolverem dúvidas, corrigirem erros de
              código e revisarem conteúdos complexos de forma interativa e
              acessível. O objetivo é oferecer um portal educacional onde os
              alunos possam interagir com um chatbot baseado na API da OpenAI,
              promovendo uma experiência de aprendizado contínua e assistida.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <WelcomeButton />
          </div>
        </div>
        <img
          src="./src/assets/IMG_5683.PNG"
          alt="LearnBot"
          className="w-32 md:w-48 lg:w-1/3 h-auto mr-6"
        />
      </div>
    </div>
  );
}


export default Home;
