import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<SignUp />} />
        <Route
          path="/doctor-dashboard"
          element={
            <PrivateRoute allowedRoles={["doctor"]}>
              <Dashboard role="doctor" />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <Dashboard role="admin" />
            </PrivateRoute>
          }
        />
        <Route
          path="/patient-dashboard"
          element={
            <PrivateRoute allowedRoles={["patient"]}>
              <Dashboard role="patient" />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
