import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "themes/theme";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "components/NavigationBar";
import Container from "@mui/material/Container";
import Footer from "components/Footer";
import Login from "components/Login";

const SignUp: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavigationBar />
        <Container maxWidth="xl">
          <Login />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default SignUp;
