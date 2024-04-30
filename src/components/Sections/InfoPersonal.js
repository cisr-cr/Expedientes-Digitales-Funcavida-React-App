import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel"; // Import InputLabel
import FormControl from "@mui/material/FormControl";

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

const InfoPersonal = ({ infoPersonal, handleSaveExpediente }) => {
  // Initial state with sample data
  const [clickedExpediente, setClickedExpediente] = useState(infoPersonal);
  const [value, setValue] = React.useState(
    dayjs(clickedExpediente.InformacionPaciente.DOB)
  );

  // State to track edit mode
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Perform save logic here (e.g., update the backend with the edited data)
    // For simplicity, we'll just toggle back to view mode in this example
    setIsEditing(false);
    console.log("clickedExpediente", clickedExpediente);
    handleSaveExpediente();
  };

  const handleChange = (path, value) => {
    setClickedExpediente((prevInfo) => {
      const nestedObject = { ...prevInfo };
      const keys = path.split(".");

      // Navigate through the nested structure
      let currentObject = nestedObject;
      for (let i = 0; i < keys.length - 1; i++) {
        currentObject = currentObject[keys[i]] || {};
      }

      // Update the specific field in the nested structure
      currentObject[keys[keys.length - 1]] = value;

      return nestedObject;
    });
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
                  onChange={(e) =>
                    handleChange("InformacionPaciente.Nombre", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Cedula"
                  fullWidth
                  value={clickedExpediente.InformacionPaciente.Cedula}
                  onChange={(e) =>
                    handleChange("InformacionPaciente.Cedula", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Diagnóstico"
                  fullWidth
                  value={clickedExpediente.HistoriaMedica.Diagnostico}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.Diagnostico", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <FormControl fullWidth>
                  <InputLabel disabled={!isEditing} id="estado-label">
                    Estado
                  </InputLabel>{" "}
                  <Select
                    label="Estado"
                    fullWidth
                    value={
                      clickedExpediente.InformacionGeneral.EstadoExpediente ===
                      "Activo"
                        ? 1
                        : 0
                    }
                    onChange={(e) =>
                      handleChange(
                        "InformacionGeneral.EstadoExpediente",
                        e.target.value === 1 ? "Activo" : "Inactivo"
                      )
                    }
                    disabled={!isEditing}
                    style={{ marginBottom: "16px" }}
                    sx={{ textAlign: "left" }}
                  >
                    <MenuItem value={1}>Activo</MenuItem>
                    <MenuItem value={0}>Inactivo</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Última Actualización de Expediente"
                  fullWidth
                  value={formatDate(
                    clickedExpediente.InformacionGeneral.UltimaActualizacion
                  )}
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
                  disabled={true}
                  style={{ marginBottom: "16px" }}
                />
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es-mx"
                >
                  <DatePicker
                    label="Fecha de Nacimiento"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                      handleChange(
                        "InformacionPaciente.DOB",
                        newValue.format()
                      );
                    }}
                    disableFuture={true}
                    sx={{ width: "100%", marginBottom: "16px" }}
                    disabled={!isEditing}
                  />
                </LocalizationProvider>
                <TextField
                  label="Correo Electrónico"
                  fullWidth
                  value={
                    clickedExpediente.InformacionPaciente.CorreoElectronico
                  }
                  onChange={(e) =>
                    handleChange(
                      "InformacionPaciente.CorreoElectronico",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Teléfono"
                  fullWidth
                  value={clickedExpediente.InformacionPaciente.Telefono}
                  onChange={(e) =>
                    handleChange("InformacionPaciente.Telefono", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Dirección"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.InformacionPaciente.Direccion}
                  onChange={(e) =>
                    handleChange(
                      "InformacionPaciente.Direccion",
                      e.target.value
                    )
                  }
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
