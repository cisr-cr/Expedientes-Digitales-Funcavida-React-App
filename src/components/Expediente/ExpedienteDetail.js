import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import ExpedienteInfo from "./ExpedienteInfo";
import ExpedienteSections from "./ExpedienteSections";
import Box from "@mui/material/Box";
import { useExpedientes } from "../../contexts/ExpedientesContext";

export default function ExpedienteDetail() {
  let { id } = useParams();
  const { handleClickExpediente, clickedExpediente } = useExpedientes();

  useEffect(() => {
    let abortController = new AbortController();
    handleClickExpediente(id);
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Box sx={{ padding: 2, height: "100%" }}>
      {clickedExpediente && (
        <Grid className="Grid" container direction="row" spacing={2}>
          <Grid xs={3}>
            <ExpedienteInfo clickedExpediente={clickedExpediente} />
          </Grid>
          <Grid xs={9}>
            <ExpedienteSections clickedExpediente={clickedExpediente} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
