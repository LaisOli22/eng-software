function ExplainInfo() {
  return (
    <div className="justify-center w-screen flex align-top">
      <div className="items-start w-1/2 flex">
        <div className="bg-[#383638] w-8 h-8 rounded-full mr-6">
          <img
            src="./src/assets/IMG_5669.PNG"
            alt="Edu"
            className=" lg:w-11 h-auto"
          />
        </div>

        <p className="text-justify w-auto text-xs  bg-[#E1DDE5] rounded-3xl p-3 inline-box">
          Ótimo! Qual comando ou função você quer que eu explique?
        </p>
      </div>
    </div>
  );
}

export default ExplainInfo;
