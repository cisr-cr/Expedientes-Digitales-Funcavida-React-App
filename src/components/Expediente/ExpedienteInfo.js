import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./ExpedienteInfo.css";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";

export default function ExpedienteInfo() {
  return (
    <Grid
      className="ExpedienteGrid"
      container
      direction="column"
      justifyContent="space-around"
    >
      <Grid>
        <Avatar
          src="https://gravatar.com/avatar/a70abbf760cc113f06bc7f2c0a51dfb4?s=400&d=robohash&r=x"
          sx={{ "--Avatar-size": "10rem", margin: "auto" }}
        />
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Nombre
        </Typography>
        <Typography fontWeight="lg">Liam Taylor</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Cedula
        </Typography>
        <Typography fontWeight="lg">123456789</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Diagnostico
        </Typography>
        <Typography fontWeight="lg">Cáncer de pulmón</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Estado
        </Typography>
        <Typography fontWeight="lg">Activo</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Ultima Actualizacion de expediente
        </Typography>
        <Typography fontWeight="lg">10 dias</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Edad
        </Typography>
        <Typography fontWeight="lg">48</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Fecha de nacimiento
        </Typography>
        <Typography fontWeight="lg">12/12/75</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Correo Electronico
        </Typography>
        <Typography fontWeight="lg">juan@example.com</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Telefono
        </Typography>
        <Typography fontWeight="lg">12345678</Typography>
      </Grid>
      <Grid>
        <Typography level="body-xs" fontWeight="lg">
          Direccion
        </Typography>
        <Typography fontWeight="lg">Calle Principal #123</Typography>
      </Grid>
    </Grid>
  );
}
