import { NextUIProvider } from '@nextui-org/react';
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { appsSharp, createOutline, sendSharp } from "ionicons/icons";

function Challenge() {
  return (
    <NextUIProvider>
      <div className="h-screen bg-yellow bg-cover bg-center">
        <div className="flex p-10 align-middle relative">
          <IonIcon icon={appsSharp} className="size-12 pl-28 text-[#592899]" />
          <div className=" flex items-center justify-start pl-32 text-4xl">
            <h1 className="text-[#383638] font-bold">Learn</h1>
            <h1 className="text-[#383638] font-500">Bot</h1>
          </div>
          <Link to="/selecionar">
            <IonIcon
              icon={createOutline}
              className="absolute size-14 right-36 text-[#592899]"
            />
          </Link>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center mb-20">
          <div className="flex items-center gap-4 bg-[#E1DDE5] rounded-full h-14 w-1/2 shadow-md justify-between">
            <input
              placeholder="Digite algo"
              className="bg-transparent flex-1 pl-8 size-14 border-transparent focus:ring-0 focus:outline-none focus:border-transparent"
            />
            <Button className="bg-[#C9BCD6] rounded-full h-10 w-10 mr-3 flex items-center justify-center hover:bg-[#baaec5] focus-outline-none">
              <IonIcon icon={sendSharp} className="size-6 text-[#592899]" />
            </Button>
          </div>
        </div>
      </div>
        
    </NextUIProvider>
  )
}

export default Challenge