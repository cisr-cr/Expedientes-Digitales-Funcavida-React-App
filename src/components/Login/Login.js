import React, { useEffect, useState } from "react";
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

function DerechosDeAutor(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
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
  palette: {
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "transparent",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h5: {
      color: "#ffffff",
    },
    body2: {
      color: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2196f3",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#ffffff",
          },
          "& .MuiInputLabel-root": {
            color: "#ffffff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#2196f3",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffffff",
            },
          },
        },
      },
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) {
      console.error("Email and password are required");
      setError("Se requiere correo electrónico y contraseña");
      setOpen(true);
      return;
    }

    if (!isValidEmail(email)) {
      console.error("Invalid email format");
      setError("Formato de correo inválido.");
      setOpen(true);
      return;
    }

    const success = await auth.signin(email, password);
    if (!success) {
      console.log("ERROR!");
      setError(
        "No se pudo iniciar sesión. Verifique sus credenciales e inténtelo nuevamente."
      );
      setOpen(true);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
    auth.signinWithProvider("google");
  };

  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon color="secondary" />
          </Avatar>
          <Typography component="h1" variant="h5">
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
              sx={{
                mt: 1,
                bgcolor: "#4285F4",
                "&:hover": { bgcolor: "#357AE8" },
              }}
              endIcon={<GoogleIcon />}
            >
              Iniciar sesión con Google
            </Button>
          </Box>
        </Box>
        <DerechosDeAutor sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
