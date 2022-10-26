import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BallTriangle } from "react-loader-spinner";
const PrivetRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoutes;
