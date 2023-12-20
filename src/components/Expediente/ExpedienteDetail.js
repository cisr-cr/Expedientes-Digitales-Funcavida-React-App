import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import ExpedienteInfo from "./ExpedienteInfo";
import ExpedienteSections from "./ExpedienteSections";

export default function ExpedienteDetail() {
  let { id } = useParams();
  return (
    <Grid className="Grid" container direction="row" spacing={2}>
      <Grid xs={3}>
        <ExpedienteInfo />
      </Grid>
      <Grid xs={9}>
        <ExpedienteSections />
      </Grid>
    </Grid>
  );
}
