import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "themes/theme";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "components/NavigationBar";
import Container from "@mui/material/Container";
import Footer from "components/Footer";
import DoctorDashboard from "components/DoctorDashboard";

interface DashboardProps {
  role: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavigationBar />
        <Container maxWidth="xl">
          {role === "doctor" && <DoctorDashboard />}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
