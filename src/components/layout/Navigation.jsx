import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navigation() {
  const user = useSelector((state) => state.auth.user);
  if (user) {
    return (
      <nav className="hidden sm:flex gap-4 text-sm font-bold text-primary">
        <NavLink
          to="/diary"
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
        >
          Diary
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
        >
          Calculator
        </NavLink>
      </nav>
    );
  }

  return (
    <nav className="hidden sm:flex gap-4 text-sm font-bold text-primary">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "text-accent" : "hover:text-accent"
        }
      >
        Register
      </NavLink>
    </nav>
  );
}
