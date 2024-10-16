import { Button } from "@nextui-org/react";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";

function InputTab() {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center mb-12">
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
  );
}

export default InputTab;