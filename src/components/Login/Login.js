import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthenticationContext";
import { redirect } from "react-router-dom";

function DerechosDeAutor(props) {
  return (
    <Typography variant="body2" color="primary" align="center" {...props}>
      {"Derechos de autor © "}
      <Link color="inherit" href="https://funcavida.org/">
        Funcavida
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    color: "#ffffff", // Set all text to white
  },
  palette: {
    primary: {
      main: "#ffffff", // Set primary color to white
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2196f3", // Set hover background to transparent
          },
        },
      },
    },
  },
});

export default function Login() {
  const auth = useAuth();
  console.log("auth:" + auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign In logic here
    console.log("Signing in with Google...");
  };

  useEffect(() => {
    let abortController = new AbortController();
    if (auth.user) {
      return redirect("/expedientes");
    }
    return () => {
      abortController.abort();
    };
  }, [auth.user]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "inherit", // orange background color
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                // Set text color to white
                style: { color: "#ffffff" },
              }}
              InputLabelProps={{
                // Set label color to white
                style: { color: "#ffffff" },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                // Set text color to white
                style: { color: "#ffffff" },
              }}
              InputLabelProps={{
                // Set label color to white
                style: { color: "#ffffff" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleGoogleSignIn}
              sx={{ mt: 1 }}
              endIcon={<GoogleIcon />}
            >
              Iniciar sesión con Google
            </Button>
          </Box>
        </Box>
        <DerechosDeAutor sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
