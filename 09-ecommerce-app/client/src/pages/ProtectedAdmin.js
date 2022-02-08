import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user.role === "admin";
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
