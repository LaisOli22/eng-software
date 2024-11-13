import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsSharp, createOutline } from "ionicons/icons";

function Header() {
  return (
    <div className="flex flex-row items-center justify-around w-full fixed top-2 pt-4 z-10">
      <IonIcon icon={appsSharp} className="size-8 text-[#592899]" />
      <Link to="/" className="flex items-center justify-center text-2xl">
        <h1 className="text-[#383638] font-bold">Learn</h1>
        <h1 className="text-[#383638] font-500">Bot</h1>
      </Link>
      <Link to="/selecionar">
        <IonIcon
          icon={createOutline}
          className="flex items-center size-10  text-[#592899]"
        />
      </Link>
    </div>
  );
}

export default Header;
