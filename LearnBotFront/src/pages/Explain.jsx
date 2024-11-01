import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTabExplain";

function Explain() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-purple bg-cover bg-center">
        <Header />
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Explain;
