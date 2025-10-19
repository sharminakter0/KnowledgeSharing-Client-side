import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  if (user && user?.email) {
    return children;
  }

  return (
    <Navigate
      to="/auth/sign-in"
      state={{ from: location.pathname }}
      replace
    />
  );
};

export default PrivateRouter;
