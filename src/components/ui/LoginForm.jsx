import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetError } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, error, isLoading } = useSelector((state) => state.auth);

  // ✅ Redirect if logged in
  useEffect(() => {
    if (user) {
      navigate("/diary");
    }
  }, [user, navigate]);

  // ✅ Clear error on unmount
  useEffect(() => {
    return () => dispatch(resetError());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-8"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border rounded p-2"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Parolă"
        value={formData.password}
        onChange={handleChange}
        className="border rounded p-2"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-accent text-white py-2 rounded-button font-bold hover:opacity-90 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "Se autentifică..." : "Autentifică-te"}
      </button>
    </form>
  );
}
