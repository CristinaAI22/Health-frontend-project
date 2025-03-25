export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-accent text-white px-6 py-2 rounded-button text-sm font-bold hover:opacity-90 transition-all"
    >
      {children}
    </button>
  );
}
