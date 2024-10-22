import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CopyRight from "./CopyRight";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function Footer() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          minHeight: "calc(100vh - FOOTERHEIGHTpx)",
          backgroundColor: "primary.main",
          color: "primary.dark",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            useFlexGap
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                mr: "64px",
                color: "inherit",
              }}
            >
              <XIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
              <InstagramIcon
                sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
              />
              <YouTubeIcon
                sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
              />
              <FacebookIcon
                sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                ml: "64px",
              }}
            >
              <Stack direction="row" spacing={2} useFlexGap>
                <Box>
                  <Stack
                    spacing={1}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    <LocationOnIcon
                      sx={{ display: { xs: "flex", md: "flex" }, mt: "5px" }}
                    />
                    <Typography
                      sx={{ width: 250, fontSize: "24px", fontWeight: "600" }}
                    >
                      Visit our Location
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400" }}
                        color=""
                      >
                        250 Main Street, New York
                      </Typography>
                    </Typography>
                  </Stack>
                </Box>
                <Box sx={{ mx: "64px" }}>
                  <Stack
                    spacing={1}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    <PhoneIcon
                      sx={{ display: { xs: "flex", md: "flex" }, mt: "5px" }}
                    />
                    <Typography
                      sx={{ width: 250, fontSize: "24px", fontWeight: "600" }}
                    >
                      Give us a Call
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400" }}
                        color=""
                      >
                        + (12) 123 - 456 -789
                      </Typography>
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    spacing={1}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    <EmailIcon
                      sx={{ display: { xs: "flex", md: "flex" }, mt: "5px" }}
                    />
                    <Typography
                      sx={{ width: 250, fontSize: "24px", fontWeight: "600" }}
                    >
                      Send us a Message
                      <Typography
                        sx={{ fontSize: "16px", fontWeight: "400" }}
                        color=""
                      >
                        info@test.com
                      </Typography>
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <CopyRight />
    </>
  );
}
export default Footer;
