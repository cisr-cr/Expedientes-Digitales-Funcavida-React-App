import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import "./ExpedienteInfo.css";

// Function to format date to Costa Rica locale without time
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Costa_Rica",
  };
  return new Date(dateString).toLocaleDateString("es-CR", options);
};

function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
}

export default function ExpedienteInfo({ clickedExpediente }) {
  const [avatarSrc, setAvatarSrc] = useState(
    clickedExpediente.InformacionPaciente.Foto
  );

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `http://localhost:9000/api/expedientefoto/${clickedExpediente._id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAvatarSrc(data.InformacionPaciente.Foto);
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <Grid
      className="ExpedienteGrid"
      container
      direction="column"
      justifyContent="space-around"
    >
      <Grid>
        <label htmlFor="avatarInput">
          <Avatar
            src={avatarSrc}
            sx={{ "--Avatar-size": "10rem", margin: "auto" }}
          />
        </label>
        <input
          id="avatarInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Nombre
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionPaciente.Nombre}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Cédula
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionPaciente.Cedula}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Diagnóstico
        </Typography>
        <Typography level="body1">
          {clickedExpediente.HistoriaMedica.Diagnostico}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Estado
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionGeneral.EstadoExpediente}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Última Actualización de Expediente
        </Typography>
        <Typography level="body1">
          {formatDate(clickedExpediente.InformacionGeneral.UltimaActualizacion)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Edad
        </Typography>
        <Typography level="body1">
          {calculateAge(clickedExpediente.InformacionPaciente.DOB)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Fecha de Nacimiento
        </Typography>
        <Typography level="body1">
          {formatDate(clickedExpediente.InformacionPaciente.DOB)}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Correo Electrónico
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionPaciente.CorreoElectronico}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Teléfono
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionPaciente.Telefono}
        </Typography>
      </Grid>
      <Grid>
        <Typography level="h6" className="ExpedienteTitle">
          Dirección
        </Typography>
        <Typography level="body1">
          {clickedExpediente.InformacionPaciente.Direccion}
        </Typography>
      </Grid>
    </Grid>
  );
}
