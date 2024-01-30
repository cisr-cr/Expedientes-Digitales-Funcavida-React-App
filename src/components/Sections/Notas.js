import * as React from "react";
import "./Notas.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#ddd7f3",
}));

const notes = [
  {
    note: "Paciente respondiendo positivamente al tratamiento de quimioterapia. No se observan efectos secundarios significativos. Continuar con la dosis programada.",
    date: "2024-01-31",
  },
  {
    note: "Revisión de los resultados de los análisis de sangre. Los niveles de hemoglobina han mejorado, pero se observa una ligera disminución en los glóbulos blancos. Se ajustará la medicación.",
    date: "2024-02-15",
  },
  {
    note: "Consulta con el oncólogo para discutir opciones de tratamiento adicionales. Se programará una sesión de radioterapia para la próxima semana.",
    date: "2024-03-05",
  },
  {
    note: "Seguimiento post-radioterapia. El paciente presenta algunos efectos secundarios esperados, como fatiga y irritación cutánea. Se recetan medicamentos para aliviar los síntomas.",
    date: "2024-03-20",
  },
  {
    note: "Entrevista con el paciente para evaluar su bienestar emocional. Se recomienda apoyo psicológico adicional. Se refiere al paciente a un consejero especializado.",
    date: "2024-04-10",
  },
  {
    note: "Resultados de la prueba de imagen indican reducción del tamaño del tumor. Excelente progreso en el tratamiento actual.",
    date: "2024-05-02",
  },
  {
    note: "Cambio en el régimen de medicamentos debido a reacciones alérgicas. Se monitorizará de cerca la respuesta del paciente.",
    date: "2024-05-15",
  },
  {
    note: "Discusión sobre opciones de cirugía. Se programará una cirugía de extirpación del tumor para el próximo mes.",
    date: "2024-06-01",
  },
  {
    note: "Evaluación de la recuperación postoperatoria. El paciente se encuentra estable y responde bien al tratamiento postoperatorio.",
    date: "2024-06-20",
  },
];

export default function Notas() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item className="Notas">
            {notes.map((note, index) => (
              <Grid item xs={12} key={index} className="Nota">
                <div className="NotasFecha">{note.date}</div>
                <div className="NotasDetalle">{note.note}</div>
                <Divider light />
              </Grid>
            ))}
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item className="AddNotas">
            {" "}
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Grid xs={12}>
                <TextField
                  id="filled-multiline-static"
                  label="Agregar Notas ✍🏻"
                  multiline
                  rows={4}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid xs={2}>
                <Button variant="contained">Listo 🚀</Button>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
