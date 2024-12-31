import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import useLocalStorageWithExpiry from "hooks/useLocalStorageWithExpiry";

const LoginSignup: React.FC = () => {
  const navigate = useNavigate();
  const { saveData } = useLocalStorageWithExpiry();
  const [isLogin, setIsLogin] = useState(true);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateInputs = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailAdd || !password) {
      setError("Email and password are required.");
      return false;
    }

    if (!emailRegex.test(emailAdd)) {
      setError("Invalid email format.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    if (!isLogin && (!userFirstName || !userLastName || !phoneNum)) {
      setError("All fields are required for sign up.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) return;

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
      saveData("token", response.data.token, 5 * 60 * 60 * 1000);
      console.log("response.data", response.data);

      setError(null);
      setSuccessMessage(isLogin ? "Login successful!" : "Signup successful!");

      setTimeout(() => navigate("/"), 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setUserFirstName("");
      setUserLastName("");
      setPassword("");
      setEmailAdd("");
      setPhoneNum("");
    }
  };

  return (
    <>
      <Box sx={{ fontSize: "2rem" }}>{isLogin ? "Login" : "Sign Up"}</Box>
      <Box>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
      <FormControl
        sx={{ width: "-webkit-fill-available", alignItems: "center" }}
        required
      >
        {!isLogin && (
          <>
            <InputField
              label="First Name"
              value={userFirstName}
              onChange={setUserFirstName}
            />
            <InputField
              label="Last Name"
              value={userLastName}
              onChange={setUserLastName}
            />
          </>
        )}
        <InputField label="Email" value={emailAdd} onChange={setEmailAdd} />
        <InputField
          label="Password"
          value={password}
          type="password"
          onChange={setPassword}
        />
        {!isLogin && (
          <InputField label="Phone" value={phoneNum} onChange={setPhoneNum} />
        )}
        <Button sx={{ bgcolor: "primary.dark" }} onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        <Box>
          {isLogin ? (
            <>
              Don't have an account?
              <Button
                onClick={() => setIsLogin(false)}
                sx={{ color: "primary.dark" }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              Already have an account?
              <Button
                onClick={() => setIsLogin(true)}
                sx={{ color: "primary.dark" }}
              >
                Log in
              </Button>
            </>
          )}
        </Box>
      </FormControl>
    </>
  );
};

const InputField: React.FC<{
  label: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}> = ({ label, value, type = "text", onChange }) => (
  <Box sx={{ width: "400px", mb: "15px" }}>
    <TextField
      label={label}
      type={type}
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
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </Box>
);

export default LoginSignup;
