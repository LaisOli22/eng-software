import showdown from "showdown";

function Answer({ message }) {
  const converter = new showdown.Converter();
  const messages = converter.makeHtml(message);

  return (
    <div className="flex self-start align-top">
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

      {/* Contêiner da mensagem */}
      <div className="bg-[#eee9f0] text-black p-3 rounded-3xl w-full">
        <p className="text-xs text-justify inline-box" dangerouslySetInnerHTML={{ __html: messages }} />
      </div>
    </div>
  );
}

export default Answer;
