import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-primary text-xl font-bold"
          aria-label="Închide meniul"
        >
          &times;
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col gap-4 px-6 text-primary font-bold">
        <NavLink
          to="/diary"
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
          onClick={onClose}
        >
          Diary
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
          onClick={onClose}
        >
          Calculator
        </NavLink>
      </nav>
    </div>
  );
}
