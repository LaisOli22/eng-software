import { IonIcon } from "@ionic/react";
import { pencilOutline } from "ionicons/icons";

function MelhoriaButton({onMelhoriaClick}) {
    return (
        <>  

            <span className="flex items-center justify-center gap-2 h-9 rounded-[30px] border-[#58b468d0] border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80 px-4 py-2" 
                style={{ backgroundColor: "rgb(225, 221, 229)" }}
                onClick={onMelhoriaClick}>
                <div className="flex items-center justify-center h-5 w-5 text-[#3f7d48]">
                    <IonIcon icon={pencilOutline} className="size-4" />
                </div>
                <div className="text-center text-sm">
                    <p>Preciso de ajuda para melhorar meu código.</p>
                </div>  
            </span>
        </>
    );
}

export default MelhoriaButton;
