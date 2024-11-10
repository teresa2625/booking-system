import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function ContactUs() {
  return (
    <FormControl
      sx={{ width: "-webkit-fill-available" }}
      defaultValue=""
      required
    >
      <Stack sx={{ mt: "30px", maxWidth: "700px" }} gap={3} spacing={3}>
        <Stack direction="row" gap={3} spacing={1}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "primary.main",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "primary.main",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
          />
        </Stack>
        <Stack gap={3} spacing={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              backgroundColor: "primary.main",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            sx={{
              backgroundColor: "primary.main",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            slotProps={{
              htmlInput: {
                style: {
                  height: "250px",
                },
              },
            }}
            sx={{
              backgroundColor: "primary.main",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
          />
        </Stack>
        <Button sx={{ bgcolor: "primary.dark" }}>Submit</Button>
      </Stack>
    </FormControl>
  );
}
export default ContactUs;
