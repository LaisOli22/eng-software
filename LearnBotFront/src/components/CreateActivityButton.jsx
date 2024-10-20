import {IonIcon} from "@ionic/react"
import { addCircleOutline } from "ionicons/icons";
import { libraryOutline } from "ionicons/icons";

function CreateActivityButton(){
    return(
        <a href="/desafio">
            <span className="flex items-center justify-evenly w-72 h-24 rounded-[20px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none bg-white hover:bg-[#fdf5ff]">
                <div className="flex items-center justify-center bg-yellow-300 rounded-[15px] h-14 w-14"> <IonIcon icon={libraryOutline} className="size-16"/></div>
                <div className="text-center font-semibold text-lg"><p>Criar<br/>Desafio</p></div>  
                <div ><IonIcon icon={addCircleOutline} className="size-8"/></div>          
            </span>
        </a>
    )
}

export default CreateActivityButton;