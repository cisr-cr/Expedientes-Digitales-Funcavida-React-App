import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ExpedientesSummary from "./ExpedientesSummary";
import Box from "@mui/material/Box";

export default function ExpedientesList() {
  return (
    <Box sx={{ maxHeight: "650px", overflowY: "auto" }}>
      <Grid spacing={1} container disableEqualOverflow>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
        <Grid xs={12}>
          <ExpedientesSummary />
        </Grid>
      </Grid>
    </Box>
  );
}
