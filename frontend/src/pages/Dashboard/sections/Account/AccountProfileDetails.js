import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import axios from "axios";

const userData = JSON.parse(localStorage.getItem("userData"));
const updateUserData = async (data) => {
  const token = userData?.token;
  const domain = process.env.REACT_APP_API_DOMAIN;

  try {
    const response = await axios.put(
      `${domain}/users/${userData?.id}`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // Other headers if needed
        },
      }
    );

    if (response.status === 200) {
      alert("Data updated successfully");
      window.location.reload();
    }


  } catch (error) {
    // Handle authentication failure
    console.error(
      "Authentication error:",
      error.response ? error.response.data : error.message
    );
    alert("Data update failed");
  }
};

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    username: userData?.username || "",
    password: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Check password match and update state
      if (name === "password" || name === "confirmPassword") {
        setPasswordMatch(values.password === values.confirmPassword);
      }

      // Check password length and update helper text
      if (name === "password" && value.length < 6) {
        setValues((prevState) => ({
          ...prevState,
          passwordHelperText: "Password must be at least 6 characters long",
        }));
      } else {
        setValues((prevState) => ({
          ...prevState,
          passwordHelperText: "",
        }));
      }
    },
    [values]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      // Check if passwords match before saving details
      if (passwordMatch) {
        // Add logic for saving details
        updateUserData(values);
      } else {
        console.error("Passwords do not match");
      }
    },
    [values, passwordMatch]
  );

  useEffect(() => {
    // Check password match and update state
    setPasswordMatch(values.password === values.confirmPassword);
  }, [values.password, values.confirmPassword]);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  required
                  value={values.username}
                  autoComplete="username"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Change Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  autoComplete="new-password"
                  required
                  helperText={values.passwordHelperText}
                  error={values.passwordHelperText !== ""}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  type="password"
                  value={values.confirmPassword}
                  autoComplete="new-password"
                  required
                  error={!passwordMatch}
                  helperText={!passwordMatch && "Passwords do not match"}
                  sx={{ borderColor: passwordMatch ? "initial" : "red" }}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" disabled={!passwordMatch} type="submit">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
