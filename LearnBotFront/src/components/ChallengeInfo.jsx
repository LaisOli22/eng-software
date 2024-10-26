function ChallengeInfo() {
  return (
    <div className="justify-center flex align-top">
      <div className="bg-[#383638] w-11 h-11 rounded-full mr-6">
        <img
          src="./src/assets/IMG_5669.PNG"
          alt="Edu"
          className=" lg:w-11 h-auto"
        />
      </div>

      <p className="text-justify w-1/2 text-lg  bg-[#E1DDE5] rounded-3xl p-3">
        Vamos criar um desafio para você! Primeiro, me diga até onde você já
        estudou para eu preparar um desafio adequado. <br/> Escolha uma opção: <br/> Módulo
        1 - HTML5 & CSS3 - Introdução à HTML5 <br/> Módulo 2 - HTML5 & CSS3 -
        Introdução às CSS3 <br/> Módulo 3 - HTML5 & CSS3 - Versionamento, Imagens e
        Tabelas <br/> Módulo 4 - HTML5 & CSS3 - Formulários e Responsividade
      </p>
    </div>
  );
}

export default ChallengeInfo;
