import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const TextFieldBlack = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "black",
    },
  },
};
const SingUp = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      p={3}
      sx={{
        backgroundImage: `url(/register-bg.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 20rem",
        objectFit: "cover",
      }}
    >
      <Stack flexDirection={"column"} width={"35%"} gap={2} mt={"2rem"}>
        <Typography variant="h5">Log in with your Instagram account</Typography>
        <TextField
          id="outlined-basic"
          placeholder="username, phone or email"
          variant="outlined"
          fullWidth
          sx={TextFieldBlack}
        />
        <TextField
          id="outlined-basic"
          placeholder="enter your password"
          variant="outlined"
          fullWidth
          required
          sx={TextFieldBlack}
        />
        <Button
          size={"large"}
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "gray",
            ":hover": { color: "black" },
          }}
          fullWidth
        >
          Sign Up
        </Button>
        <Typography variant="subtitle2" alignSelf={"center"}>
          Already have accout ?
          <Button
            onClick={() => {
              handleSignIn();
            }}
            sx={{ textTransform: " lowercase" }}
          >
            sign in
          </Button>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SingUp;