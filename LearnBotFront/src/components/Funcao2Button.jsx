import React from 'react';
import { IonIcon } from "@ionic/react";
import { codeOutline } from "ionicons/icons";

function Funcao2Button({ onFuncao2Click }) {
    return (
        <span
            onClick={onFuncao2Click} // Adiciona o onClick aqui
            className="flex items-center justify-center gap-2 h-9 rounded-[30px] border-[#9073e8] border-2 hover:cursor-pointer shadow-lg active:shadow-none hover:bg-[#fdf5ff] opacity-80 px-4 py-2"
            style={{ backgroundColor: "rgb(225, 221, 229)" }}
        >
            <div className="flex items-center justify-center h-9 w-9 text-purple-600">
                <IonIcon icon={codeOutline} className="text-xl" />
            </div>
            <div className="text-center text-xs">
                <p>Me explique o comando sort()</p>
            </div>  
        </span>
    );
}

export default Funcao2Button;