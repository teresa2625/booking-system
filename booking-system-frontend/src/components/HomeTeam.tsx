import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HomeTeam() {
  return (
    <Stack direction="row" gap={3} spacing={1} sx={{ mt: "30px" }}>
      <Box>
        <Stack spacing={2} sx={{ minWidth: "240px" }}>
          <AccountCircleIcon
            sx={{ color: "primary.dark", fontSize: "150px" }}
          />
          <Typography sx={{ color: "promary.dark", fontSize: "32px" }}>
            First Last Name
          </Typography>
          <Typography sx={{ color: "secondary.main", fontSize: "24px" }}>
            Title
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "15px", lineHeight: "35px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'
        </Typography>
      </Box>
    </Stack>
  );
}
export default HomeTeam;
