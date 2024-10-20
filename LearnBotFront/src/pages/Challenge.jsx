import { NextUIProvider } from "@nextui-org/react";
import Header from "../components/Header";
import InputTab from "../components/InputTabChallenge";
import ChallengeInfo from "../components/ChallengeInfo";

function Challenge() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-yellow bg-cover bg-center">
        <Header />
        <ChallengeInfo/>
        <InputTab />
      </div>
    </NextUIProvider>
  );
}

export default Challenge;
