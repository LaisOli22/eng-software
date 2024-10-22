import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";

function AnswerButton() {
    return (
      <Link to="/selecionar" className="inline-block">
        <Button className="bg-[#8142d4] hover:bg-[#6b37b0] text-white font-normal py-7 px-5 text-xl rounded-full flex items-center gap-3">
          <span>Resposta</span>
          <IonIcon icon={arrowForward} className="size-6 pt-1" />
        </Button>
      </Link>
    );
  }
  
  export default AnswerButton;