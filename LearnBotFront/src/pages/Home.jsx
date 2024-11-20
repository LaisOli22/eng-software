import AnimatedImage from "../components/AnimatedImage";
import WelcomeButton from "../components/WelcomeButton";

function Home() {
  return (
    <div className="bg-black absolute h-screen w-screen bg-pattern bg-cover bg-center overflow-hidden">
      <div>
        <div className=" flex items-center justify-center pt-6 text-4xl">
          <h1 className="text-white font-bold">Learn</h1>
          <h1 className="text-[#D3F936] font-500">Bot</h1>
        </div>
        <img
          src="./src/assets/Objetivo_Desenvolvimento_Sustentável_4_PT_01.webp.png"
          alt="LearnBot"
          className="absolute top-0 right-20 w-20 h-auto mr-6 mt-0"
        />
      </div>

      <div className="flex justify-evenly items-center w-full  gap-0 h-full">
        <div className="flex-col items-center w-1/3 ml-36 mb-14">
          <div className="text-[#FFFFFF] text-justify items-center">
            <h1 className="text-[35px] font-bold leading-tight mb-4">
              Estude quando quiser,
              <br /> a qualquer momento
            </h1>
            <p className="mb-6 text-lg">
              Desenvolvido para ajudar estudantes iniciantes em programação à
              resolverem dúvidas, corrigirem erros de código e revisarem
              conteúdos complexos de forma interativa e acessível. O objetivo é
              oferecer um portal educacional onde os alunos possam interagir com
              um chatbot baseado na API da OpenAI, promovendo uma experiência de
              aprendizado contínua e assistida.
            </p>
            <div className="flex items-center justify-center">
              <WelcomeButton />
            </div>
          </div>
        </div>

        <div className="flex items-center h-full w-1/3 mb-14 ">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
}

export default Home;
