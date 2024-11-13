function ExplainInfo() {
  return (
    <div className="justify-center w-screen flex align-top">
      <div className="w-1/2 flex">
        <div className="bg-[#383638] w-8 h-8 rounded-full mr-6 flex items-center justify-center">
          <img
            src="./src/assets/IMG_5669.PNG"
            alt="Edu"
            className="size-7"
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
