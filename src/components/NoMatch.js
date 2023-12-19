import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NoMatch = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: "error" }} />
      <Typography variant="h4" gutterBottom>
        ¡Oops! Parece que te has perdido.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ marginTop: "20px" }}
      >
        Volver a Registros
      </Button>
    </Box>
  );
};

export default NoMatch;
