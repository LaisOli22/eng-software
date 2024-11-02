import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import ExplainButtonContainer from "../components/ExplainButtonsContainer";

function Explain() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-purple bg-cover bg-center">
        <Header />
        <ExplainButtonContainer/>
      </div>
    </NextUIProvider>
  );
}

export default Explain;
