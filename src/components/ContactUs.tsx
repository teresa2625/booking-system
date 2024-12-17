import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function ContactUs() {
  const [fullName, setFullName] = React.useState<string>("");
  const [contactEmail, setContactEmail] = React.useState<string>("");
  const [phoneNum, setPhoneNum] = React.useState<string>("");
  const [msgTitle, setMsgTitle] = React.useState<string>("");
  const [msgContext, setMsgContext] = React.useState<string>("");

  const handleSubmit = () => {
    const emailFormat = {
      name: fullName,
      phone: phoneNum,
      email: contactEmail,
      title: msgTitle,
      message: msgContext,
    };
    console.log("emailFormat", emailFormat);
  };
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
            onChange={(event) => {
              setFullName(event.target.value);
            }}
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
            onChange={(event) => {
              setPhoneNum(event.target.value);
            }}
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
            onChange={(event) => {
              setContactEmail(event.target.value);
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
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(event) => {
              setMsgTitle(event.target.value);
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
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            onChange={(event) => {
              setMsgContext(event.target.value);
            }}
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
        <Button
          sx={{ bgcolor: "primary.dark" }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </Stack>
    </FormControl>
  );
}
export default ContactUs;
