import * as React from "react";
import "./Notas.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useExpedientes } from "../../contexts/ExpedientesContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "#FFF",
}));

export default function Notas({ notas }) {
  const { handleAddNota } = useExpedientes();
  const [nota, setNota] = React.useState("");

  const saveNota = () => {
    handleAddNota(nota);
    setNota(""); // Clear the text field after saving
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item className="Notas">
            {notas && notas.length > 0 ? (
              notas.map((note, index) => (
                <Grid xs={12} key={index} className="Nota">
                  <div className="NotasFecha">
                    {note.author} {note.date}
                  </div>
                  <div className="NotasDetalle">{note.note}</div>
                  <Divider light />
                </Grid>
              ))
            ) : (
              <div className="NoNotasMessage">No hay notas disponibles ❌</div>
            )}
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item className="AddNotas">
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
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                />
              </Grid>
              <Grid xs={2}>
                <Button variant="contained" onClick={saveNota}>
                  Listo 🚀
                </Button>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
