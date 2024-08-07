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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useExpedientes } from "../../contexts/ExpedientesContext";

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

const DatosFamiliares = ({ clickedExpediente }) => {
  const [familiares, setFamiliares] = useState(clickedExpediente.familiares);
  const { handleSaveFamiliares } = useExpedientes();

  const handleEditToggle = (index) => {
    setFamiliares((prevFamiliares) =>
      prevFamiliares.map((familiar, i) =>
        i === index ? { ...familiar, isEditing: !familiar.isEditing } : familiar
      )
    );
  };

  const handleSave = (index) => {
    setFamiliares((prevFamiliares) => {
      const updatedFamiliares = prevFamiliares.map((familiar, i) =>
        i === index ? { ...familiar, isEditing: false } : familiar
      );
      handleSaveFamiliares(updatedFamiliares);
      return updatedFamiliares;
    });
  };

  const handleChange = (index, field, value) => {
    setFamiliares((prevFamiliares) =>
      prevFamiliares.map((familiar, i) =>
        i === index ? { ...familiar, [field]: value } : familiar
      )
    );
  };

  const handleAddFamiliar = () => {
    setFamiliares([
      ...familiares,
      {
        NombreDelFamiliar: "",
        Cedula: "",
        FechaNacimiento: null,
        Ocupacion: "",
        Relacion: "",
        IngresoMensual: "",
        isEditing: true,
      },
    ]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {familiares.map((familiar, index) => (
          <Grid key={index} xs={12}>
            <Card>
              <div style={{ overflow: "auto" }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Datos Familiar {index + 1}
                  </Typography>
                  <TextField
                    label="Nombre Del Familiar"
                    fullWidth
                    value={familiar.NombreDelFamiliar}
                    onChange={(e) =>
                      handleChange(index, "NombreDelFamiliar", e.target.value)
                    }
                    disabled={!familiar.isEditing}
                    style={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Cedula"
                    fullWidth
                    value={familiar.Cedula}
                    onChange={(e) =>
                      handleChange(index, "Cedula", e.target.value)
                    }
                    disabled={!familiar.isEditing}
                    style={{ marginBottom: "16px" }}
                  />
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es-mx"
                  >
                    <DatePicker
                      label="Fecha de Nacimiento"
                      value={dayjs(familiar.FechaNacimiento)}
                      onChange={(newValue) => {
                        handleChange(
                          index,
                          "FechaNacimiento",
                          newValue.format()
                        );
                      }}
                      disableFuture={true}
                      sx={{ width: "100%", marginBottom: "16px" }}
                      disabled={!familiar.isEditing}
                    />
                  </LocalizationProvider>
                  <TextField
                    label="Edad"
                    fullWidth
                    type="number"
                    value={calculateAge(familiar.FechaNacimiento)}
                    disabled={true}
                    style={{ marginBottom: "16px" }}
                  />
                  <TextField
                    label="Ocupacion"
                    fullWidth
                    value={familiar.Ocupacion}
                    onChange={(e) =>
                      handleChange(index, "Ocupacion", e.target.value)
                    }
                    disabled={!familiar.isEditing}
                    style={{ marginBottom: "16px" }}
                  />
                  <FormControl fullWidth style={{ marginBottom: "16px" }}>
                    <InputLabel disabled={!familiar.isEditing}>
                      Relacion
                    </InputLabel>
                    <Select
                      label="Relacion"
                      value={familiar.Relacion}
                      onChange={(e) =>
                        handleChange(index, "Relacion", e.target.value)
                      }
                      disabled={!familiar.isEditing}
                      sx={{ textAlign: "left" }}
                    >
                      <MenuItem value="Padre/Madre">Padre/Madre</MenuItem>
                      <MenuItem value="Hermano/Hermana">
                        Hermano/Hermana
                      </MenuItem>
                      <MenuItem value="Otro">Otro</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Ingreso Mensual"
                    fullWidth
                    type="number"
                    value={familiar.IngresoMensual}
                    onChange={(e) =>
                      handleChange(index, "IngresoMensual", e.target.value)
                    }
                    disabled={!familiar.isEditing}
                    style={{ marginBottom: "16px" }}
                  />
                  {familiar.isEditing ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave(index)}
                    >
                      Guardar
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditToggle(index)}
                    >
                      Editar
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
        <Grid xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFamiliar}
            style={{ marginTop: "16px" }}
          >
            Añadir Familiar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DatosFamiliares;
