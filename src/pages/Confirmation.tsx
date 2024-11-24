import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CopyRight from "components/CopyRight";
import NavigationBar from "components/NavigationBar";
import React from "react";
import Theme from "themes/theme";

const Confirmation: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavigationBar />
        <Container maxWidth="xl">
          <Typography>Booking Confirmed!</Typography>
          <Typography>
            Thank you for your reservation. We look forward to seeing you!
          </Typography>
        </Container>
        <CopyRight />
      </ThemeProvider>
    </>
  );
};

export default Confirmation;
