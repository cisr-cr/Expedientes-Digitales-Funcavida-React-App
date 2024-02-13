import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./ExpedienteInfo.css";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";

// Function to format date to Costa Rica locale without time
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Costa_Rica",
  };
  const costaRicaDate = new Date(dateString).toLocaleDateString(
    "es-CR",
    options
  );
  return costaRicaDate;
};

export default function ExpedienteInfo({ clickedExpediente }) {
  return (
    <Grid
      className="ExpedienteGrid"
      container
      direction="column"
      justifyContent="space-around"
    >
      <Grid>
        <Avatar
          src="https://gravatar.com/avatar/a70abbf760cc113f06bc7f2c0a51dfb4?s=400&d=robohash&r=x"
          sx={{ "--Avatar-size": "10rem", margin: "auto" }}
        />
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Nombre
        </Typography>
        <Typography fontWeight="lg">
          {clickedExpediente.InformacionPaciente.Nombre}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Cedula
        </Typography>
        <Typography fontWeight="lg">
          {clickedExpediente.InformacionPaciente.Cedula}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Diagnostico
        </Typography>
        <Typography fontWeight="lg">
          {clickedExpediente.HistoriaMedica.Diagnostico}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Estado
        </Typography>
        <Typography fontWeight="lg">
          {clickedExpediente.InformacionGeneral.EstadoExpediente}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Ultima Actualizacion de expediente
        </Typography>
        <Typography fontWeight="lg">
          {formatDate(clickedExpediente.InformacionGeneral.UltimaActualizacion)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Edad
        </Typography>
        <Typography fontWeight="lg">48</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Fecha de nacimiento
        </Typography>
        <Typography fontWeight="lg">12/12/75</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Correo Electronico
        </Typography>
        <Typography fontWeight="lg">juan@example.com</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Telefono
        </Typography>
        <Typography fontWeight="lg">12345678</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Direccion
        </Typography>
        <Typography fontWeight="lg">Calle Principal #123</Typography>
      </Grid>
    </Grid>
  );
}
