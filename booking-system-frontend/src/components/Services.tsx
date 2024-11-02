import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Services() {
  return (
    <Stack
      gap={10}
      spacing={2}
      useFlexGap
      sx={{
        flexWrap: "noWrap",
        maxWidth: "1440px",
        display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
        justifyContent: "center",
        alignItems: "center",
        mb: "30px",
      }}
    >
      <Box
        sx={{
          borderRadius: "30px",
          border: 5,
          borderColor: "primary.main",
          maxWidth: "1190px",
          minHeight: "255px",
          justifyItems: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: "' '",
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "#EBE3D5",
            left: "-10%",
            top: "-40%",
            borderRadius: "50%",
          },
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 1 }}
          direction="row"
          gap={10}
          sx={{
            maxWidth: "1190px",
            padding: "40px 50px 80px 100px",
            minHeight: "inherit",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: "600", minWidth: "150px", color: "secondary.main" }}
          >
            Service 1
          </Typography>
          <Typography
            sx={{ fontSize: "15px", wordSpacing: "3px", lineHeight: "35px" }}
          >
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
          border: 5,
          borderColor: "primary.dark",
          maxWidth: "1190px",
          minHeight: "255px",
          justifyItems: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: "' '",
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "#776B5D",
            left: "-10%",
            top: "-40%",
            borderRadius: "50%",
          },
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 1 }}
          direction="row"
          gap={10}
          sx={{
            maxWidth: "1190px",
            padding: "40px 50px 80px 100px",
            minHeight: "inherit",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: "600", minWidth: "150px", color: "secondary.main" }}
          >
            Service 2
          </Typography>
          <Typography
            sx={{ fontSize: "15px", wordSpacing: "3px", lineHeight: "35px" }}
          >
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
          border: 5,
          borderColor: "primary.main",
          maxWidth: "1190px",
          minHeight: "255px",
          justifyItems: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: "' '",
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "#EBE3D5",
            left: "-10%",
            top: "-40%",
            borderRadius: "50%",
          },
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 1 }}
          direction="row"
          gap={10}
          sx={{
            maxWidth: "1190px",
            padding: "40px 50px 80px 100px",
            minHeight: "inherit",
            alignItems: "end",
          }}
        >
          <Typography
            sx={{ fontSize: "30px", fontWeight: "600", minWidth: "150px", color: "secondary.main" }}
          >
            Service 3
          </Typography>
          <Typography
            sx={{ fontSize: "15px", wordSpacing: "3px", lineHeight: "35px" }}
          >
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
export default Services;
