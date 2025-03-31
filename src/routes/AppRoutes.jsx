import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Diary from "../pages/Diary";
import Calculator from "../pages/Calculator";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/diary"
        element={
          <PrivateRoute>
            <Diary />
          </PrivateRoute>
        }
      />
      <Route
        path="/calculator"
        element={
          <PrivateRoute>
            <Calculator />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
