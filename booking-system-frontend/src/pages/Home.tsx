import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "components/Footer";
import Header from "components/Header";
import NavigationBar from "components/NavigationBar";
import React from "react";
import Theme from "themes/theme";
import Box from "@mui/material/Box";
import Advantage from "components/Advantage";
import Services from "components/Services";
import HomeTeam from "components/HomeTeam";

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <NavigationBar />
        <Header />
        <Container maxWidth="xl">
          <Stack
            spacing={1}
            direction="row"
            sx={{ display: "flex", my: "64px" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                minWidth: "180px",
              }}
            >
              Why Choose US
            </Box>
            <Box>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',
            </Box>
          </Stack>
          <Advantage />
          <Stack
            spacing={1}
            direction="row"
            sx={{ display: "flex", my: "64px" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                minWidth: "180px",
              }}
            >
              Our services
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none", lg: "none", xl: "none" },
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',
            </Box>
          </Stack>
          <Services />
          <Stack direction="row" sx={{ my: "64px" }}>
            <Box>
              <Box
                sx={{
                  flexGrow: 1,
                  minWidth: "180px",
                }}
              >
                Meet the team
              </Box>
              <Box>
                <HomeTeam />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  flexGrow: 1,
                  minWidth: "180px",
                }}
              >
                Contact us
              </Box>
              <Box></Box>
            </Box>
          </Stack>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
