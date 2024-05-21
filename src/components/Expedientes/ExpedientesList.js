import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ExpedientesSummary from "./ExpedientesSummary";
import Box from "@mui/material/Box";
import ExpedientesSearchBar from "./ExpedientesSearchBar";
import Divider from "@mui/joy/Divider";
import { useExpedientes } from "../../contexts/ExpedientesContext";
import "./ExpedientesContainer.css";

export default function ExpedientesList() {
  const { expedientes } = useExpedientes();

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid xs={12}>
        <ExpedientesSearchBar />
        <Divider />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ maxHeight: "45rem", overflowY: "auto", width: "100%" }}>
          <Grid container spacing={2}>
            {expedientes.map((expediente, index) => (
              <Grid key={index} xs={12}>
                <ExpedientesSummary expediente={expediente} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
