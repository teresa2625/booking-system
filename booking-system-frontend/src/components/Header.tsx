import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: "calc(100vh - FOOTERHEIGHTpx)",
        backgroundColor: "primary.light",
        color: "primary.light",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
            },
            maxWidth: "1440px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "1440px",
              maxHeight: "450px",
            }}
            src="/header.jpg"
          ></img>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "none",
            },
            maxWidth: "1200px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "1160px",
              maxHeight: "375px",
            }}
            src="/header.jpg"
          ></img>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "none" },
            maxWidth: "1199px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "900px",
              maxHeight: "340px",
            }}
            src="/header.jpg"
          ></img>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none", lg: "none" },
            maxWidth: "500px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "500px",
              maxHeight: "155px",
            }}
            src="/header.jpg"
          ></img>
        </Box>
      </Container>
    </Box>
  );
}
export default Header;
