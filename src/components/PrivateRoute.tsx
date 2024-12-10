import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles: string[];
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  allowedRoles,
  children = null,
}) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Not logged in");
    return <Navigate to="/login" replace />;
  }

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const userRole = decodedToken.role;

  if (!allowedRoles.includes(userRole)) {
    console.log("Unauthorized");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
