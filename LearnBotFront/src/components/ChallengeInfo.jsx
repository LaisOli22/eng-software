function ChallengeInfo() {
  return (
    <div className="justify-center flex align-top">
      <div className="w-1/2 flex gap-2">
         {/* Contêiner da imagem */}
         <div
          className="bg-[#383638] flex items-center justify-center"
          style={{
            width: "36px",  // Largura fixa
            height: "36px", // Altura fixa
            borderRadius: "50%", // Tornando a imagem circular
            flexShrink: 0, // Evitar redimensionamento
          }}
        >
          <img
            src="./src/assets/IMG_5669.PNG"
            alt="Edu"
            style={{
              width: "100%",   // Preencher 100% do contêiner
              height: "100%",  // Preencher 100% do contêiner
              objectFit: "cover", // Preserva as proporções da imagem
              borderRadius: "50%", // Torna a imagem circular
            }}
          />
        </div>

        <p className="text-justify text-xs  bg-[#eee9f0] rounded-3xl p-3 border-2 border-dotted border-[#e1ccc0] inline-box">
          Vamos criar um desafio para você! Primeiro, me diga até onde você já
          estudou para eu preparar um desafio adequado. <br /> Escolha uma
          opção:
          <br /> <strong> Módulo 1 - </strong> Arquitetura Von Neumann <br /> <strong> Módulo 2 - </strong> Introdução
          à organização de computadores <br /> <strong> Módulo 3 - </strong> Introdução a
          algoritmos
          <br /> <strong> Módulo 4 - </strong> Modelagem matemática de funções simples
          <br /> <strong> Módulo 5 - </strong> Modelagem de funções com múltiplos parâmetros <br />
          <strong> Módulo 6 - </strong> Apresentação à linguagens de programação de alto nível{" "}
          <br />
          <strong> Módulo 7 - </strong> Linguagens baseadas em script <br /> <strong> Módulo 8 - </strong> Tipos de
          dados básicos <br /> <strong> Módulo 9 - </strong> Mapeamento de funções em código <br />
          <strong> Módulo 10 - </strong> Escopo de variáveis <br /> <strong> Módulo 11 - </strong> Operadores e
          precedência <br /> <strong> Módulo 12 - </strong> Expressões <br /> <strong> Módulo 13 - </strong> Entrada e
          saída <br /> <strong> Módulo 14 - </strong> Comandos de decisão <br /> <strong> Módulo 15 - </strong>
          Comandos de repetição <br /> <strong> Módulo 16 - </strong> Noções de utilização de
          arrays e estruturas de dados nativas
        </p>
      </div>
    </div>
  );
}

export default ChallengeInfo;
