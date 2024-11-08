// eslint-disable-next-line react/prop-types
function Answer({ message }) {
  return (
    <div className="flex self-start align-top">
      <div className="bg-[#383638] w-8 h-8 rounded-full mr-6">
        <img
          src="./src/assets/IMG_5669.PNG"
          alt="Edu"
          className=" lg:w-11 h-auto"
        />
      </div>
      <div className=" bg-[#E1DDE5] text-black p-3 rounded-3xl max-w-[60%]">
        <p className="text-xs text-justify">{message}</p>
      </div>
    </div>
  );
}

export default Answer;
