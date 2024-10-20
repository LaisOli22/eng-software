import {IonIcon} from "@ionic/react"
import { addCircleOutline } from "ionicons/icons";
import { helpCircleOutline } from "ionicons/icons";

function ConceptExplainButton(){
    return(
        <a href="/explique">
            <span className="flex items-center justify-evenly w-72 h-24 rounded-[20px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none bg-white hover:bg-[#fdf5ff]">
                <div className="flex items-center justify-center bg-purple-600 rounded-[15px] h-14 w-14"> <IonIcon icon={helpCircleOutline} className="size-16"/></div>
                <div className="text-center font-semibold text-lg"><p>Explique<br/>Conceito</p></div>  
                <div ><IonIcon icon={addCircleOutline} className="size-8"/></div>          
            </span>
        </a>
    )
}

export default ConceptExplainButton;