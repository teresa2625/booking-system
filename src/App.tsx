import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import SignUp from "pages/SignUp";
import PrivateRoute from "components/PrivateRoute";
import DoctorDashboard from "components/DoctorDashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<SignUp />} />
        <Route
          path="/admin-dashboard"
          element={<PrivateRoute>{/* <AdminDashboard /> */}</PrivateRoute>}
        />
        <Route
          path="/doctor-dashboard"
          element={
            <PrivateRoute>{<DoctorDashboard bookings={[]} />}</PrivateRoute>
          }
        />
        <Route
          path="/patient-dashboard"
          element={<PrivateRoute>{/* <PatientDashboard /> */}</PrivateRoute>}
        />
      </Routes>
    </Router>
  );
};

export default App;
