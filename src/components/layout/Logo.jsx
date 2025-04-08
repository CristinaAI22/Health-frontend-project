import { useNavigate } from "react-router-dom";
import logo1x from "../../assets/logo-png@1x.png";
import logo2x from "../../assets/logo-png@2x.png";
import SlimText from "../../assets/Slim.svg";
import MomText from "../../assets/Mom.svg";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/diary")}
      className="flex items-center gap-1"
    >
      {/* Image logo */}
      <img
        src={logo1x}
        srcSet={`${logo1x} 1x, ${logo2x} 2x`}
        alt="Logo"
        className="h-6 sm:h-8"
      />

      {/* Text only on tablet+ */}
      <div className="hidden sm:flex items-center gap-1">
        <img src={SlimText} alt="Slim" className="h-4 sm:h-6" />
        <img src={MomText} alt="Mom" className="h-4 sm:h-6" />
      </div>
    </button>
  );
}
