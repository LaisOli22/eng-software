
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsSharp, createOutline } from "ionicons/icons";

function Header() {
  return (
    <div className="flex p-10 align-middle relative">
      <IonIcon icon={appsSharp} className="size-12 pl-28 text-[#592899]" />
      <div className=" flex items-center justify-start pl-32 text-4xl">
        <h1 className="text-[#383638] font-bold">Learn</h1>
        <h1 className="text-[#383638] font-500">Bot</h1>
      </div>
      <Link to="/selecionar">
        <IonIcon
          icon={createOutline}
          className="absolute size-14 right-36 text-[#592899]"
        />
      </Link>
    </div>
  );
}

export default Header;
