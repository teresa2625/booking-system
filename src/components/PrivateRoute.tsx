import React from "react";
import { Navigate, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const userRole = decodedToken.role;

  if (userRole === "admin") {
    return <Navigate to="/admin-dashboard" replace />;
  } else if (userRole === "doctor") {
    return <Navigate to="/doctor-dashboard" replace />;
  } else if (!["admin", "doctor", "patient"].includes(userRole)) {
    return <Navigate to="/login" replace />;
  } else {
    return <Navigate to="/patient-dashboard" replace />;
  }
};

export default PrivateRoute;
