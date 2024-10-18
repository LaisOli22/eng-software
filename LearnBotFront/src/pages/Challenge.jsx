import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTab";

function Challenge() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-yellow bg-cover bg-center">
        <Header />
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Challenge;
