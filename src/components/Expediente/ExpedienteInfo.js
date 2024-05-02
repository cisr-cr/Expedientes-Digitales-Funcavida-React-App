import React, { useState } from "react";
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
  const [avatarSrc, setAvatarSrc] = useState(
    clickedExpediente.InformacionPaciente.Foto
  );

  //update foto
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
        // Update avatar src if upload successful
        const data = await response.json();
        setAvatarSrc(data.InformacionPaciente.Foto);
      } else {
        // Handle error
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
