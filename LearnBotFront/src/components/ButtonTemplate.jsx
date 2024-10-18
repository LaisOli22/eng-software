import {IonIcon} from "@ionic/react"
import { addCircleOutline } from "ionicons/icons";
import { schoolOutline } from "ionicons/icons";

function ButtonTemplate(){
    return(
        <a href="/estudar">
            <span className="flex items-center justify-evenly w-72 h-24 rounded-[20px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none bg-white">
                <div className="flex items-center justify-center bg-pink-400 rounded-[15px] h-14 w-14"> <IonIcon icon={schoolOutline} className="size-16"/></div>
                <div className="text-center font-semibold text-lg"><p>Estudar<br/>Assunto</p></div>  
                <div ><IonIcon icon={addCircleOutline} className="size-8"/></div>          
            </span>
        </a>
    )
}

export default ButtonTemplate;