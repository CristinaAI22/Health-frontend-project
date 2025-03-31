import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo-png@2x.png";
import Slim from "../../assets/Slim.svg";
import Mom from "../../assets/Mom.svg";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/diary")}
      className="flex items-center gap-2"
    >
      <img src={logoImg} alt="Logo" className="h-6 sm:h-8" />
      <img src={Slim} alt="Slim" className="h-4 sm:h-6" />
      <img src={Mom} alt="Mom" className="h-4 sm:h-6" />
    </button>
  );
}
