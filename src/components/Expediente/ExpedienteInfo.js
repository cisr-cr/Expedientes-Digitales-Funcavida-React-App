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

function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  // Check if the birthday has occurred this year
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
}

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
          src={clickedExpediente.InformacionPaciente.Foto}
          sx={{ "--Avatar-size": "10rem", margin: "auto" }}
        />
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Nombre
        </Typography>
        <Typography>{clickedExpediente.InformacionPaciente.Nombre}</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Cedula
        </Typography>
        <Typography>{clickedExpediente.InformacionPaciente.Cedula}</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Diagnostico
        </Typography>
        <Typography>{clickedExpediente.HistoriaMedica.Diagnostico}</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Estado
        </Typography>
        <Typography>
          {clickedExpediente.InformacionGeneral.EstadoExpediente}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Ultima Actualizacion de expediente
        </Typography>
        <Typography>
          {formatDate(clickedExpediente.InformacionGeneral.UltimaActualizacion)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Edad
        </Typography>
        <Typography>
          {calculateAge(clickedExpediente.InformacionPaciente.DOB)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Fecha de nacimiento
        </Typography>
        <Typography>
          {formatDate(clickedExpediente.InformacionPaciente.DOB)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Correo Electronico
        </Typography>
        <Typography>
          {clickedExpediente.InformacionPaciente.CorreoElectronico}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Telefono
        </Typography>
        <Typography>
          {clickedExpediente.InformacionPaciente.Telefono}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Direccion
        </Typography>
        <Typography>
          {clickedExpediente.InformacionPaciente.Direccion}
        </Typography>
      </Grid>
    </Grid>
  );
}
