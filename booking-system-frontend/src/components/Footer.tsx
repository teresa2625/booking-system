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
import { Link } from "react-router-dom";

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
            gap={3}
            spacing={1}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                mr: "64px",
                mt: "64px",
                mb: "15px",
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
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mt: "64px", mb: "15px", height: "75px" }}
            />
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                ml: "64px",
                mt: "64px",
                mb: "15px",
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
            <Box sx={{ mb: "50px" }}>
              <Stack direction="row" spacing={3} useFlexGap>
                <Box
                  sx={{
                    maxWidth: 260,
                  }}
                >
                  <Typography
                    sx={{
                      width: 260,
                      fontSize: "16px",
                      fontWeight: "600",
                      mb: "15px",
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                    Physio is a premium WordPress theme designed & built for
                    physical therapy and rehabilitation clinics. The theme has a
                    drag and drop page builder, is fully customizable and
                    responsive. Only available on ThemeForest.
                  </Typography>
                </Box>
                <Box sx={{ maxWidth: 260, ml: "50px" }}>
                  <Typography
                    sx={{
                      width: 260,
                      fontSize: "16px",
                      fontWeight: "600",
                      mb: "15px",
                    }}
                  >
                    Extra Navigation
                  </Typography>
                  <Stack gap={1} spacing={2} useFlexGap>
                    <Link to="/">Nav 1</Link> <br />
                    <Link to="/">Nav 2</Link> <br />
                    <Link to="/">Nav 3</Link>
                  </Stack>
                </Box>
                <Box sx={{ maxWidth: 260, ml: "50px" }}>
                  <Typography
                    sx={{
                      width: 260,
                      fontSize: "16px",
                      fontWeight: "600",
                      mb: "15px",
                    }}
                  >
                    Our Services
                  </Typography>
                  <Stack gap={1} spacing={2} useFlexGap>
                    <Link to="/">Sevice 1</Link> <br />
                    <Link to="/">Sevice 2</Link> <br />
                    <Link to="/">Sevice 3</Link>
                  </Stack>
                </Box>
                <Box sx={{ maxWidth: 260, ml: "50px" }}>
                  <Typography
                    sx={{
                      width: 260,
                      fontSize: "16px",
                      fontWeight: "600",
                      mb: "15px",
                    }}
                  >
                    Opening Hours
                  </Typography>
                  <Stack
                    gap={1}
                    divider={<Divider orientation="horizontal" flexItem />}
                    spacing={6}
                    useFlexGap
                  >
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Monday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Tuesday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Wednesday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Thursday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Friday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Saturday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
                    <Stack spacing={1} direction="row" useFlexGap>
                      <Typography>Sunday</Typography>
                      <Typography
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", md: "flex" },
                          justifyContent: "flex-end",
                        }}
                      >
                        07:00 - 17:00
                      </Typography>
                    </Stack>
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
