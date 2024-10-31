import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Footer from "components/Footer";
import Header from "components/Header";
import NavigationBar from "components/NavigationBar";
import React from "react";
import { Link } from "react-router-dom";
import Theme from "themes/theme";

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavigationBar />
        <Header />
        <Container maxWidth="xl">
          <Typography>Welcome to the Booking System</Typography>
          <Link to="/booking">Make a Booking</Link>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
