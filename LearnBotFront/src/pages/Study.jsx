import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTabStudy";
import StudyInfo from "../components/StudyInfo";

function Study() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-pink bg-cover bg-center">
        <Header />
        <StudyInfo/>
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Study;
