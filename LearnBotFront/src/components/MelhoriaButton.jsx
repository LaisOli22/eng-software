import { IonIcon } from "@ionic/react";
import { pencilOutline } from "ionicons/icons";

function MelhoriaButton({onMelhoriaClick}) {
    return (
        <>  

            <span className="flex items-center justify-center gap-2 w-24 h-8 rounded-[30px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80" 
                style={{ backgroundColor: "rgb(225, 221, 229)" }}
                onClick={onMelhoriaClick}>
                <div className="flex items-center justify-center h-5 w-5 text-purple-600">
                    <IonIcon icon={pencilOutline} className="text-3xl" />
                </div>
                <div className="text-center text-xs">
                    <p>Melhoria</p>
                </div>  
            </span>
        </>
    );
}

export default MelhoriaButton;
