import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "http://localhost:5000/auth/login"
        : "http://localhost:5000/auth/signup";

      const body = isLogin
        ? { emailAdd, password }
        : {
            userFirstName,
            userLastName,
            password,
            emailAdd,
            phoneNum,
            roles: "patient",
          };

      const response = await axios.post(url, body);

      localStorage.setItem("token", response.data.token);
      setError(null);
      alert(isLogin ? "Login successful!" : "Signup successful!");
    } catch (err) {
      setError("Invalid credentials or user already exists");
    }
  };

  return (
    <>
      <Box
        sx={{
          fontSize: "2rem",
        }}
      >
        {isLogin ? "Login" : "Sign Up"}
      </Box>
      <Box>
        {error && <Typography style={{ color: "red" }}>{error}</Typography>}
      </Box>
      <FormControl
        sx={{ width: "-webkit-fill-available", alignItems: "center" }}
        defaultValue=""
        required
      >
        {isLogin ? (
          <Box sx={{ width: "400px", mb: "15px" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                width: "100%",
                backgroundColor: "primary.light",
                "& label.Mui-focused": {
                  color: "#776B5D",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#776B5D",
                  },
                },
              }}
              onChange={(event) => {
                setEmailAdd(event.target.value);
              }}
            />
          </Box>
        ) : (
          <>
            <Box sx={{ width: "400px", mb: "15px" }}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "primary.light",
                  "& label.Mui-focused": {
                    color: "#776B5D",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#776B5D",
                    },
                  },
                }}
                onChange={(event) => {
                  setUserFirstName(event.target.value);
                }}
              />
            </Box>
            <Box sx={{ width: "400px", mb: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "primary.light",
                  "& label.Mui-focused": {
                    color: "#776B5D",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#776B5D",
                    },
                  },
                }}
                onChange={(event) => {
                  setUserLastName(event.target.value);
                }}
              />
            </Box>
          </>
        )}

        <Box sx={{ width: "400px", mb: "15px" }}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{
              width: "100%",
              backgroundColor: "primary.light",
              "& label.Mui-focused": {
                color: "#776B5D",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#776B5D",
                },
              },
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Box>
        {!isLogin && (
          <>
            <Box sx={{ width: "400px", mb: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "primary.light",
                  "& label.Mui-focused": {
                    color: "#776B5D",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#776B5D",
                    },
                  },
                }}
                onChange={(event) => {
                  setEmailAdd(event.target.value);
                }}
              />
            </Box>
            <Box sx={{ width: "400px", mb: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                sx={{
                  width: "100%",
                  backgroundColor: "primary.light",
                  "& label.Mui-focused": {
                    color: "#776B5D",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#776B5D",
                    },
                  },
                }}
                onChange={(event) => {
                  setPhoneNum(event.target.value);
                }}
              />
            </Box>
          </>
        )}
        <Button sx={{ bgcolor: "primary.dark" }} onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        {isLogin ? (
          <Box>
            Don't have an account?
            <Button
              onClick={() => setIsLogin(!isLogin)}
              sx={{ color: "primary.dark" }}
            >
              Sign Up
            </Button>
          </Box>
        ) : (
          <Box>
            Already have an account?
            <Button
              onClick={() => setIsLogin(!isLogin)}
              sx={{ color: "primary.dark" }}
            >
              Log in
            </Button>
          </Box>
        )}
      </FormControl>
    </>
  );
};

export default LoginSignup;
