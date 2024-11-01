import { IonIcon } from "@ionic/react";
import { pencilOutline } from "ionicons/icons";

function MelhoriaButton({onMelhoriaClick}) {
    return (
        <>  

            <span className="flex items-center justify-center gap-2 w-36 h-12 rounded-[30px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80" 
                style={{ backgroundColor: "rgb(225, 221, 229)" }}
                onClick={onMelhoriaClick}>
                <div className="flex items-center justify-center h-9 w-9 text-purple-600">
                    <IonIcon icon={pencilOutline} className="text-3xl" />
                </div>
                <div className="text-center font-normal">
                    <p>Melhoria</p>
                </div>  
            </span>
        </>
    );
}

export default MelhoriaButton;
