import React from 'react';
import { IonIcon } from "@ionic/react";
import { codeOutline } from "ionicons/icons";

function DebugButton({ onDebugClick }) {
    return (
        <span
            onClick={onDebugClick} // Adiciona o onClick aqui
            className="flex items-center justify-center gap-2 h-8 rounded-[30px] border-[#58b468d0]  border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80 px-4 py-2"
            style={{ backgroundColor: "rgb(225, 221, 229)" }}
        >
            <div className="flex items-center justify-center h-5 w-5 text-[#3f7d48]">
                <IonIcon icon={codeOutline} className="text-xl" />
            </div>
            <div className="text-center text-xs">
                <p>Preciso de ajuda para debugar meu código</p>
            </div>  
        </span>
    );
}

export default DebugButton;