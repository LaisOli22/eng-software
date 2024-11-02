import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTabExplain";
import ExplainInfo from "../components/ExplainInfo";
import ExplainButtonContainer from "../components/ExplainButtonsContainer";

function Explain() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-purple bg-cover bg-center">
        <Header />
        <ExplainInfo/>
        <ExplainButtonContainer/>
      </div>
    </NextUIProvider>
  );
}

export default Explain;
