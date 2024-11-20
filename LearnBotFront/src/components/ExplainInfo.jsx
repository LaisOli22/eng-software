function ExplainInfo() {
  return (
    <div className="justify-center flex align-top">
      <div className="w-1/2 flex">
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

        <p className="text-justify w-auto text-xs bg-[#eee9f0] rounded-3xl p-3 border-2 border-dotted border-[#d2c0e1] inline-box">
          Ótimo! Qual comando ou função você quer que eu explique?
        </p>
      </div>
    </div>
  );
}

export default ExplainInfo;
