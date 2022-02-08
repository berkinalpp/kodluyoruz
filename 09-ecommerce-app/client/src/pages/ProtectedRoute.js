import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
