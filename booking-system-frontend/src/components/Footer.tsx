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
            gap={2}
            spacing={1}
            useFlexGap
            sx={{
              flexWrap: "noWrap",
              maxWidth: "1440px",
              display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
            }}
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
              <Stack direction="row" gap={"1px"} spacing={3}>
                <XIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <InstagramIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <YouTubeIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <FacebookIcon sx={{ display: { xs: "flex", md: "flex" } }} />
              </Stack>
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
                flexWrap: "noWrap",
              }}
            >
              <Stack
                direction="row"
                useFlexGap
                sx={{ flexWrap: "noWrap" }}
                spacing={{ lg: 1, xl: 15 }}
              >
                <Box>
                  <Stack
                    spacing={1}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "nowrap" }}
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
                        123 Main Street, New York
                      </Typography>
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack
                    spacing={1}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "nowrap" }}
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
                    sx={{ flexWrap: "nowrap" }}
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
          <Stack
            direction="row"
            gap={3}
            spacing={{ lg: 5, xl: 15 }}
            useFlexGap
            sx={{
              flexWrap: "noWrap",
              display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
              maxWidth: "1440px",
              mt: "30px",
              mb: "64px",
            }}
          >
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: 260 }}>
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
            <Box sx={{ maxWidth: 260 }}>
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
            <Box sx={{ maxWidth: 260 }}>
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
                      justifyContent: "flex-end",
                    }}
                  >
                    07:00 - 17:00
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Stack
            gap={3}
            useFlexGap
            sx={{
              flexWrap: "noWrap",
              maxWidth: "1440px",
              display: { xs: "flex", md: "flex", lg: "none", xl: "none" },
            }}
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
              <Stack
                direction="row"
                gap={"1px"}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <XIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <InstagramIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <YouTubeIcon sx={{ display: { xs: "flex", md: "flex" } }} />
                <FacebookIcon sx={{ display: { xs: "flex", md: "flex" } }} />
              </Stack>
            </Box>
            <Box>
              <Stack
                spacing={1}
                direction="row"
                useFlexGap
                sx={{ flexWrap: "nowrap" }}
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
                    123 Main Street, New York
                  </Typography>
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Stack
                spacing={1}
                direction="row"
                useFlexGap
                sx={{ flexWrap: "nowrap" }}
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
                sx={{ flexWrap: "nowrap" }}
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
            <Box>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
            </Box>
            <Box>
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
            <Box>
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
            <Box
              sx={{
                mb: "64px",
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
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
                      display: { xs: "flex", md: "flex" },
                      justifyContent: "flex-end",
                    }}
                  >
                    07:00 - 17:00
                  </Typography>
                </Stack>
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
