import { Link, useLocation} from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { appsSharp, homeOutline } from "ionicons/icons";

function Header() {
  const location = useLocation();
  const isIconHidden = location.pathname === "/selecionar";
  return (
    <div className="flex flex-row items-center justify-around w-full fixed top-2 pt-4 z-10">
      <IonIcon icon={appsSharp} className="size-8 text-[#592899] opacity-0" />
      <Link to="/" className="flex items-center justify-center text-2xl">
        <h1 className="text-[#383638] font-bold">Learn</h1>
        <h1 className="text-[#383638] font-500">Bot</h1>
      </Link>
      <Link to="/selecionar">
        <IonIcon
          icon={homeOutline}
          className={`flex items-center size-9  text-[#592899] ${isIconHidden? "opacity-0" : ""}`}
        />
      </Link>
    </div>
  );
}

export default Header;
