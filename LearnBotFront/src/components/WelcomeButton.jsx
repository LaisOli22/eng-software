import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";

function WelcomeButton() {
    return (
      <Link to="/selecionar" className="inline-block">
        <Button className="bg-[#9167F1] hover:bg-[#7e59d2] text-white text-[14px] py-4 px-2  rounded-full flex justify-center items-center">
          <span>Começar agora</span>
          <IonIcon icon={arrowForward} className="size-4" />
        </Button>
      </Link>
    );
  }
  
  export default WelcomeButton;
