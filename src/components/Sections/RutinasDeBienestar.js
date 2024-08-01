import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const RutinasDeBienestar = ({ rutinasDeBienestar, handleSaveExpediente }) => {
  const [clickedRutina, setClickedRutina] = useState(rutinasDeBienestar);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    handleSaveExpediente(clickedRutina);
  };

  const handleChange = (path, value) => {
    setClickedRutina((prevInfo) => {
      const nestedObject = { ...prevInfo };
      const keys = path.split(".");

      // Navegar a través de la estructura anidada
      let currentObject = nestedObject;
      for (let i = 0; i < keys.length - 1; i++) {
        currentObject = currentObject[keys[i]] || {};
      }

      // Actualizar el campo específico en la estructura anidada
      currentObject[keys[keys.length - 1]] = value;

      return nestedObject;
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Card>
            <div style={{ overflow: "auto" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Rutinas de Bienestar
                </Typography>
                <TextField
                  label="Actividades"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Actividades}
                  onChange={(e) =>
                    handleChange(
                      "RutinasDeBienestar.Actividades",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Objetivos"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Objetivos}
                  onChange={(e) =>
                    handleChange("RutinasDeBienestar.Objetivos", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Dieta y Nutrición"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Dieta}
                  onChange={(e) =>
                    handleChange("RutinasDeBienestar.Dieta", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Ejercicio Físico"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Ejercicio}
                  onChange={(e) =>
                    handleChange("RutinasDeBienestar.Ejercicio", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Sueño y Descanso"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Sueno}
                  onChange={(e) =>
                    handleChange("RutinasDeBienestar.Sueno", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Manejo del Estrés"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.ManejoEstres}
                  onChange={(e) =>
                    handleChange(
                      "RutinasDeBienestar.ManejoEstres",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Hábitos de Hidratación"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Hidratacion}
                  onChange={(e) =>
                    handleChange(
                      "RutinasDeBienestar.Hidratacion",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Notas"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedRutina.RutinasDeBienestar.Notas}
                  onChange={(e) =>
                    handleChange("RutinasDeBienestar.Notas", e.target.value)
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

export default RutinasDeBienestar;
