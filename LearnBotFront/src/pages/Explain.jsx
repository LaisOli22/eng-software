import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTabExplain";
<<<<<<< HEAD
import ExplainInfo from "../components/ExplainInfo";
import ExplainButtonContainer from "../components/ExplainButtonsContainer";
=======
>>>>>>> da6171a35ed559cba282a0f74a9eb7ba844550e9

function Explain() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-purple bg-cover bg-center">
        <Header />
<<<<<<< HEAD
        <ExplainInfo/>
        <ExplainButtonContainer/>
=======
        <InputTab />
>>>>>>> da6171a35ed559cba282a0f74a9eb7ba844550e9
      </div>
    </NextUIProvider>
  );
}

export default Explain;
