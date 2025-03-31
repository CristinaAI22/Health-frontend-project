import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, resetError } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { user, error, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/diary");
    }
  }, [user, navigate]);

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
    dispatch(register(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-8"
    >
      <input
        type="text"
        name="name"
        placeholder="Nume"
        value={formData.name}
        onChange={handleChange}
        className="border rounded p-2"
        required
      />
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
        {isLoading ? "Se înregistrează..." : "Înregistrează-te"}
      </button>
    </form>
  );
}
