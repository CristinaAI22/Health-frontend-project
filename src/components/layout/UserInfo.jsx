import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

export default function UserInfo({ mobile = false }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className={`${
        mobile
          ? "text-sm text-accent font-bold underline"
          : "text-accent font-bold hover:underline"
      }`}
    >
      Exit
    </button>
  );
}
