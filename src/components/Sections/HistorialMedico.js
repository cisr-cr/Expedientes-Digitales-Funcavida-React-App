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

const HistorialMedico = ({ historialMedico, handleSaveExpediente }) => {
  // Estado inicial con datos de ejemplo
  const [clickedExpediente, setClickedExpediente] = useState(historialMedico);
  const [value, setValue] = React.useState(
    dayjs(clickedExpediente.InformacionPaciente.DOB)
  );

  // Estado para rastrear el modo de edición
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    handleSaveExpediente();
  };

  const handleChange = (path, value) => {
    setClickedExpediente((prevInfo) => {
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
                  Historial Médico del Paciente
                </Typography>
                <TextField
                  label="Historial Médico"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.HistorialMedico}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.HistorialMedico",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Historial de Tratamiento"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.HistorialTratamiento}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.HistorialTratamiento",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Medicamentos"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.Medicamentos}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.Medicamentos", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Alergias"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.Alergias}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.Alergias", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Pruebas Diagnósticas e Imágenes"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.PruebasDiagnosticas}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.PruebasDiagnosticas",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Notas de Progreso"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.NotasProgreso}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.NotasProgreso", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Informes Quirúrgicos"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.InformesQuirurgicos}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.InformesQuirurgicos",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Resultados de Laboratorio"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.ResultadosLaboratorio}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.ResultadosLaboratorio",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Consultas"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.Consultas}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.Consultas", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Registros de Hospitalización"
                  fullWidth
                  multiline
                  rows={3}
                  value={
                    clickedExpediente.HistoriaMedica.RegistrosHospitalizacion
                  }
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.RegistrosHospitalizacion",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Cuidados Paliativos"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.CuidadosPaliativos}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.CuidadosPaliativos",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Cuidados de Seguimiento"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.CuidadosSeguimiento}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.CuidadosSeguimiento",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Estilo de Vida y Medidas Preventivas"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.EstiloVida}
                  onChange={(e) =>
                    handleChange("HistoriaMedica.EstiloVida", e.target.value)
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Directrices Anticipadas"
                  fullWidth
                  multiline
                  rows={3}
                  value={
                    clickedExpediente.HistoriaMedica.DirectricesAnticipadas
                  }
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.DirectricesAnticipadas",
                      e.target.value
                    )
                  }
                  disabled={!isEditing}
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Educación del Paciente"
                  fullWidth
                  multiline
                  rows={3}
                  value={clickedExpediente.HistoriaMedica.EducacionPaciente}
                  onChange={(e) =>
                    handleChange(
                      "HistoriaMedica.EducacionPaciente",
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

export default HistorialMedico;
