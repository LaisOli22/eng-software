import {IonIcon} from "@ionic/react"
import { addCircleOutline } from "ionicons/icons";
import { codeOutline } from "ionicons/icons";

function CodeCorrectionButton(){
    return(
        <a href="/codigo">
            <span className="flex items-center justify-evenly w-40 h-16 rounded-[20px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none bg-white hover:bg-[#fdf5ff]">
                <div className="flex items-center justify-center bg-green-500 rounded-[15px] h-10 w-10"> <IonIcon icon={codeOutline} className="size-8"/></div>
                <div className="text-center font-semibold text-sm"><p>Corrigir <br/>Código</p></div>  
                <div ><IonIcon icon={addCircleOutline} className="size-5"/></div>          
            </span>
        </a>
    )
}

export default CodeCorrectionButton;