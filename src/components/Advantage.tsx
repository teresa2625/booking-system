import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Advantage() {
  return (
    <Stack
      direction="row"
      gap={10}
      spacing={2}
      useFlexGap
      sx={{
        flexWrap: "noWrap",
        maxWidth: "1440px",
        display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
        justifyContent: "center",
        mb: "30px",
      }}
    >
      <Box
        sx={{
          borderRadius: "30px",
          backgroundColor: "primary.main",
          width: "300px",
          height: "300px",
          justifyItems: "center",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap", width: "250px", margin: "30px" }}
        >
          <VerifiedIcon sx={{ display: { xs: "flex", md: "flex" } }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            ADV 1
          </Typography>
          <Typography sx={{ fontSize: "15px", wordSpacing: "3px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          borderRadius: "30px",
          backgroundColor: "secondary.main",
          width: "300px",
          height: "300px",
          color: "primary.light",
          justifyItems: "center",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap", width: "250px", margin: "30px" }}
        >
          <FavoriteIcon sx={{ display: { xs: "flex", md: "flex" } }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            ADV 2
          </Typography>
          <Typography sx={{ fontSize: "15px", wordSpacing: "3px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          borderRadius: "30px",
          backgroundColor: "primary.dark",
          width: "300px",
          height: "300px",
          color: "primary.light",
          justifyItems: "center",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap", width: "250px", margin: "30px" }}
        >
          <EmojiEventsIcon sx={{ display: { xs: "flex", md: "flex" } }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            ADV 3
          </Typography>
          <Typography sx={{ fontSize: "15px", wordSpacing: "3px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
export default Advantage;
