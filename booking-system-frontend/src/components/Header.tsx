import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            position: "relative" /* set container to a relative position */,
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
          <Typography
            sx={{
              position: "absolute",
              top: "25%",
              left: "21%",
              zIndex: "2",
              color: "primary.dark",
              fontSize: "32px",
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
              top: "50%",
              left: "44%",
              zIndex: "2",
            }}
          >
            Book Appointment
          </Button>
        </Box>
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            position: "relative" /* set container to a relative position */,
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "1180px",
              maxHeight: "375px",
            }}
            src="/header.jpg"
          ></img>
          <Typography
            sx={{
              position: "absolute",
              top: "25%",
              left: "20%",
              zIndex: "2",
              color: "primary.dark",
              fontSize: "32px",
            }}
          >
            Test Test Test Test Test Test Test Test Test Test Test Test
          </Typography>
          <Button
            sx={{
              backgroundColor: "primary.dark",
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: "2",
            }}
            component={Link}
            to="/booking"
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            position: "relative" /* set container to a relative position */,
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "880px",
              maxHeight: "340px",
            }}
            src="/header.jpg"
          ></img>
          <Typography
            sx={{
              position: "absolute",
              top: "25%",
              left: "2.3%",
              zIndex: "2",
              color: "primary.dark",
              fontSize: "32px",
            }}
          >
            Test Test Test Test Test Test Test Test Test Test Test Test
          </Typography>
          <Button
            sx={{
              backgroundColor: "primary.dark",
              position: "absolute",
              top: "50%",
              left: "40%",
              zIndex: "2",
            }}
            component={Link}
            to="/booking"
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "none", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            position: "relative" /* set container to a relative position */,
            justifyContent: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              opacity: "50%",
              minWidth: "580px",
              maxHeight: "155px",
            }}
            src="/header.jpg"
          ></img>
          <Button
            sx={{
              backgroundColor: "primary.dark",
              position: "absolute",
              top: "50%",
              left: "35%",
              zIndex: "2",
            }}
            component={Link}
            to="/booking"
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;
