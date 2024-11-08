function CodeInfo() {
  return (
    <div className="justify-center w-screen flex align-top">
      <div className="items-start w-1/2 flex">
        <div className="bg-[#383638] w-16 h-8 rounded-full mr-6">
          <img
            src="./src/assets/IMG_5669.PNG"
            alt="Edu"
            className=" lg:w-11 h-auto"
          />
        </div>

        <p className="text-justify text-xs  bg-[#E1DDE5] rounded-3xl p-3 inline-box">
          Opa! Parece que o seu código deu erro, né? 😱 Não se preocupe! Estou
          aqui pra ajudar. Por favor, copie o código que está dando problema e
          cole aqui para que eu possa dar uma olhada e te ajudar a resolver o
          erro. 😊
        </p>
      </div>
    </div>
  );
}

export default CodeInfo;
