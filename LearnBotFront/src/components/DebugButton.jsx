import React from 'react';
import { IonIcon } from "@ionic/react";
import { codeOutline } from "ionicons/icons";

function DebugButton({ onDebugClick }) {
    return (
        <span
            onClick={onDebugClick} // Adiciona o onClick aqui
            className="flex items-center justify-center gap-2 w-36 h-12 rounded-[30px] border-gray-400 border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80"
            style={{ backgroundColor: "rgb(225, 221, 229)" }}
        >
            <div className="flex items-center justify-center h-9 w-9 text-purple-600">
                <IonIcon icon={codeOutline} className="text-3xl" />
            </div>
            <div className="text-center font-normal">
                <p>Debug</p>
            </div>  
        </span>
    );
}

export default DebugButton;
