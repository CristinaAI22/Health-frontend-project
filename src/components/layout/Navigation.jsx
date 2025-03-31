export default function Navigation() {
  return (
    <nav className="hidden sm:flex gap-4">
      <a href="/diary" className="text-primary text-sm hover:underline">
        Diary
      </a>
      <a href="/calculator" className="text-primary text-sm hover:underline">
        Calculator
      </a>
    </nav>
  );
}
