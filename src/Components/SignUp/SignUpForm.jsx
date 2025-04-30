import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IconButton, Input, InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function SignUpForm(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [rePasswordError, setRePasswordError] = React.useState(false);
  const [rePasswordErrorMessage, setRePasswordErrorMessage] =
    React.useState("");

  const [isLoading, setIsLoading] = React.useState("initial");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validateInputs = () => {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const rePassword = document.getElementById("rePassword");

    let isValid = true;

    if (
      !email.value ||
      !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email.value)
    ) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
    if (rePassword.value != password.value || !rePassword.value) {
      setRePasswordError(true);
      setRePasswordErrorMessage("Passwords doesn't match.");
      isValid = false;
    } else {
      setRePasswordError(false);
      setRePasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(() => "loading");
    if (nameError || emailError || passwordError) {
      setIsLoading("sent");
      return;
    }
    const data = new FormData(event.currentTarget);
    setTimeout(() => {
      setIsLoading("sent");
    }, 1500);
    toast.success("Thanks for signing up!", {
      position: "top-right",
      autoClose: 2000,
      delay: 1500,
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);

    // console.log({
    //   name: data.get("name"),
    //   lastName: data.get("lastName"),
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <FormControl>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            label="Full-Name "
            variant="filled"
            id="name"
            placeholder="maged sayed"
            error={nameError}
            helperText={nameErrorMessage}
            color="success"
            slotProps={{
              inputLabel: { sx: { color: "white" } },
              input: {
                sx: {
                  color: "white",
                  border: "none",
                },
                className: " textHover block w-full rounded-md text-white",
              },
            }}
            className="SignUpTextBg"
            // className="textHover block w-full rounded-md  px-3.5 py-2  text-white"
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            placeholder="magedsayed01@gmail.com"
            name="email"
            autoComplete="email"
            variant="filled"
            error={emailError}
            helperText={emailErrorMessage}
            color="success"
            slotProps={{
              inputLabel: { sx: { color: "white" } },
              input: {
                sx: {
                  color: "white",
                },
                className: " textHover block w-full rounded-md text-white",
              },
            }}
            className="SignUpTextBg"
          />
        </FormControl>
        <FormControl>
          {/* <InputLabel htmlFor="password">Password</InputLabel> */}
          <TextField
            required
            fullWidth
            name="password"
            placeholder="••••••"
            type={showPassword ? "text" : "password"}
            id="password"
            label="password"
            autoComplete="new-password"
            variant="filled"
            error={passwordError}
            helperText={passwordErrorMessage}
            color="success"
            className="SignUpTextBg"
            slotProps={{
              inputLabel: { sx: { color: "white" } },
              input: {
                sx: {
                  color: "white",
                },
                className: " textHover block w-full rounded-md text-white",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            fullWidth
            name="rePassword"
            placeholder="••••••"
            type="password"
            id="rePassword"
            label="rePassword"
            autoComplete="new-password"
            variant="filled"
            error={rePasswordError}
            helperText={rePasswordErrorMessage}
            color="success"
            className="SignUpTextBg"
            slotProps={{
              inputLabel: { sx: { color: "white" } },
              input: {
                sx: {
                  color: "white",
                  ":hover": { outlineColor: "white" },
                },
                className: " textHover block w-full rounded-md text-white",
              },
            }}
          />
        </FormControl>
        <Button
          variant="solid"
          loading={isLoading === "loading"}
          fullWidth
          type="submit"
          onClick={validateInputs}
          sx={{
            backgroundColor: "#b2bbff",
            color: "#0d0f11",
            borderRadius: "0px",
            ":hover": {
              backgroundColor: "#e0e4fd",
            },
          }}
          className="rounded  w-full  px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs "
        >
          Create Now
        </Button>
      </Box>
    </>
  );
}
