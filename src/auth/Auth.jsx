import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useAuth } from "../context/AuthContextProvider";

const Auth = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleRegister,
    handleLogIn,
    hasAccount,
    setHasAccount,
  } = useAuth();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 6,
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#121212",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #1e1e1e, #2c2c2c)",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#2c2c2c",
                width: 80,
                height: 80,
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
              }}
            >
              <LockOutlinedIcon
                fontSize="large"
                sx={{ color: "#ffffff", fontSize: 40 }}
              />
            </Avatar>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              {hasAccount ? "Welcome Back" : "Join Us"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#9e9e9e",
                textAlign: "center",
                maxWidth: "80%",
              }}
            >
              {hasAccount
                ? "Sign in to access your account and continue your journey with us."
                : "Create an account to start your adventure and unlock new possibilities."}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate sx={{ width: "100%" }}>
              <TextField
                label="Email Address"
                name="email"
                autoFocus
                autoComplete="email"
                required
                fullWidth
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={!!emailError}
                helperText={emailError}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "#333333",
                    },
                    "&:hover fieldset": {
                      borderColor: "#4a4a4a",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9e9e9e",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#ffffff",
                  },
                }}
              />
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                fullWidth
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#9e9e9e" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "#333333",
                    },
                    "&:hover fieldset": {
                      borderColor: "#4a4a4a",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#9e9e9e",
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#ffffff",
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  mb: 3,
                  height: "56px",
                  borderRadius: "28px",
                  textTransform: "none",
                  fontSize: "18px",
                  fontWeight: "bold",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(45deg, #2c2c2c, #1e1e1e)",
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(255, 255, 255, 0.15)",
                    transform: "translateY(-2px)",
                    background: "linear-gradient(45deg, #3c3c3c, #2e2e2e)",
                  },
                }}
                onClick={hasAccount ? handleLogIn : handleRegister}
              >
                {hasAccount ? "Sign In" : "Create Account"}
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography
                    variant="body1"
                    onClick={() => setHasAccount(!hasAccount)}
                    sx={{
                      cursor: "pointer",
                      color: "#9e9e9e",
                      fontWeight: "medium",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#ffffff",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {hasAccount
                      ? "New here? Create an account"
                      : "Already have an account? Sign in"}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Auth;
