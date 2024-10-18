import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTab";

function Study() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-pink bg-cover bg-center">
        <Header />
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Study;
