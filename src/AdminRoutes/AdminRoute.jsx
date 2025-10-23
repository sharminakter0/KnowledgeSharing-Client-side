
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (user && role === "admin") return children;
  return <Navigate to="/" />;
};

export default AdminRoute;