// src/components/layout/Header.jsx
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 sm:px-8 lg:px-20 bg-white shadow-md">
      <Logo />
      <div className="flex items-center gap-4">
        <Navigation />
        <UserInfo />
      </div>
    </header>
  );
}
