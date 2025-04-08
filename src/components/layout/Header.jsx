import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";
import UserInfo from "./UserInfo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <header className="bg-white shadow-sm py-4 px-4 sm:px-8 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Right side: navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <Navigation />
        </div>

        {/* Mobile menu icon for logged-in users */}
        {user && (
          <button
            className="sm:hidden flex items-center justify-center p-2 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Deschide meniul"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </header>

      {/* Mobile user info */}
      {user && (
        <div className="sm:hidden px-4 py-2 bg-white border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm text-primary">{user.name}</span>
          <UserInfo mobile />
        </div>
      )}

      {/* Slide-in menu for logged-in mobile users */}
      <BurgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
