import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";

function WelcomeButton() {
    return (
      <Link to="/selecionar" className="inline-block">
        <Button className="bg-[#9167F1] hover:bg-[#7e59d2] text-white font-normal py-8 px-10 text-2xl rounded-full flex items-center gap-3">
          <span>Começar agora</span>
          <IonIcon icon={arrowForward} className="size-8 pt-2" />
        </Button>
      </Link>
    );
  }
  
  export default WelcomeButton;
