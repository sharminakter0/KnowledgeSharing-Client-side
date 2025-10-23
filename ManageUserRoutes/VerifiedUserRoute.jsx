
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";

const VerifiedUserRoute = ({ children }) => {
  const { user, role, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  if (user && role === "verified") {
    return children;
  }

  return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
};

export default VerifiedUserRoute;