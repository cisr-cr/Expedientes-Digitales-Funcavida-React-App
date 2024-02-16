import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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

const InfoPersonal = ({ infoPersonal }) => {
  // Initial state with sample data
  const [clickedExpediente, setClickedExpediente] = useState(infoPersonal);

  // State to track edit mode
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Perform save logic here (e.g., update the backend with the edited data)
    // For simplicity, we'll just toggle back to view mode in this example
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setClickedExpediente((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Card>
            <div style={{ maxHeight: "44rem", overflow: "auto" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Información del Paciente
                </Typography>
                <TextField
                  label="Nombre"
                  fullWidth
                  value={clickedExpediente.InformacionPaciente.Nombre}
                  onChange={(e) => handleChange("Nombre", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Cedula"
                  fullWidth
                  value={clickedExpediente.InformacionPaciente.Cedula}
                  onChange={(e) => handleChange("Cedula", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Diagnóstico"
                  fullWidth
                  value={clickedExpediente.HistoriaMedica.Diagnostico}
                  onChange={(e) => handleChange("Diagnostico", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Estado"
                  fullWidth
                  value={clickedExpediente.InformacionGeneral.EstadoExpediente}
                  onChange={(e) => handleChange("Estado", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Última Actualización de Expediente"
                  fullWidth
                  value={formatDate(
                    clickedExpediente.InformacionGeneral.UltimaActualizacion
                  )}
                  onChange={(e) =>
                    handleChange("UltimaActualizacion", e.target.value)
                  }
                  disabled={true}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Edad"
                  fullWidth
                  type="number"
                  value={calculateAge(
                    clickedExpediente.InformacionPaciente.DOB
                  )}
                  onChange={(e) =>
                    handleChange("Edad", parseInt(e.target.value, 10))
                  }
                  disabled={true}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Fecha de Nacimiento"
                  fullWidth
                  value={formatDate(clickedExpediente.InformacionPaciente.DOB)}
                  onChange={(e) =>
                    handleChange("FechaNacimiento", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Correo Electrónico"
                  fullWidth
                  value={
                    clickedExpediente.InformacionPaciente.CorreoElectronico
                  }
                  onChange={(e) =>
                    handleChange("CorreoElectronico", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Teléfono"
                  fullWidth
                  value={clickedExpediente.InformacionPaciente.Telefono}
                  onChange={(e) => handleChange("Telefono", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Dirección"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.InformacionPaciente.Direccion}
                  onChange={(e) => handleChange("Direccion", e.target.value)}
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                {isEditing ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                  >
                    Guardar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditToggle}
                  >
                    Editar
                  </Button>
                )}
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoPersonal;
