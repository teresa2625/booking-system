import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: "calc(100vh - FOOTERHEIGHTpx)",
        backgroundColor: "primary.light",
        color: "primary.light",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          style={{
            position: "relative" /* set container to a relative position */,
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              width: "inherit",
              maxHeight: "450px",
            }}
            src="/header.jpg"
          ></img>
          <Typography
            sx={{
              position: "absolute",
              top: "25%",
              left: "25%",
              right: "25%",
              zIndex: "2",
              color: "primary.dark",
              fontSize: "32px",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            Test Test Test Test Test Test Test Test Test Test Test Test
          </Typography>
          <Button
            component={Link}
            to="/booking"
            sx={{
              backgroundColor: "primary.dark",
              position: "absolute",
              top: "60%",
              left: "44%",
              zIndex: "2",
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
