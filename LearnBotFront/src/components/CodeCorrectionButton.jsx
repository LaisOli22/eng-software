import {IonIcon} from "@ionic/react"
import { addCircleOutline } from "ionicons/icons";
import { codeOutline } from "ionicons/icons";

function CodeCorrectionButton(){
    return(
        <a href="/codigo">
            <span className="flex items-center justify-evenly w-72 h-24 rounded-[20px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none bg-white">
                <div className="flex items-center justify-center bg-green-500 rounded-[15px] h-14 w-14"> <IonIcon icon={codeOutline} className="size-16"/></div>
                <div className="text-center font-semibold text-lg"><p>Corrigir <br/>Codigo</p></div>  
                <div ><IonIcon icon={addCircleOutline} className="size-8"/></div>          
            </span>
        </a>
    )
}

export default CodeCorrectionButton;