import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function CopyRight() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: "calc(100vh - FOOTERHEIGHTpx)",
        backgroundColor: "primary.dark",
        color: "primary.light",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              color: "inherit",
            }}
          >
            Copyright © 2024.All Rights Reserved.
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button component={Link} to="/booking" color="primary">
              Schedule your next Appointment
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default CopyRight;
