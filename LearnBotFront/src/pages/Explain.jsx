import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTab";
import ExplainInfo from "../components/ExplainInfo";

function Explain() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-purple bg-cover bg-center">
        <Header />
        <ExplainInfo/>
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Explain;
