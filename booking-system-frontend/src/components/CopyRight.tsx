import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

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
            Copyright © 2022.All Rights Reserved.
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Typography>Schedule your next Appointment</Typography>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default CopyRight;
