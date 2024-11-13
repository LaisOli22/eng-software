import showdown from "showdown";

function Answer({ message }) {
  const converter = new showdown.Converter();
  const messages = converter.makeHtml(message);
  return (
    <div className="flex self-start align-top">
      <div className="bg-[#383638] w-9 h-8 rounded-full mr-6 flex items-center justify-center">
        <img
          src="./src/assets/IMG_5669.PNG"
          alt="Edu"
          className="size-7"
        />
      </div>
      <div className=" bg-[#eee9f0] text-black p-3 rounded-3xl w-full">
        <p className="text-xs text-justify inline-box" dangerouslySetInnerHTML={{ __html: messages }} />
      </div>
    </div>
  );
}

export default Answer;
