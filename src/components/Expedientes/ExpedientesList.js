import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ExpedientesSummary from "./ExpedientesSummary";
import Box from "@mui/material/Box";
import ExpedientesSearchBar from "./ExpedientesSearchBar";
import Divider from "@mui/joy/Divider";

const data = [
  {
    id: 1,
    Nombre: "John Doe",
    Cedula: "123456789",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-18",
    ImagenURL:
      "https://gravatar.com/avatar/b12fdb2902c8172a62016a3441917d5c?s=400&d=robohash&r=x",
  },
  {
    id: 2,
    Nombre: "Jane Smith",
    Cedula: "987654321",
    Estado: "Inactivo",
    UltimaActualizacion: "2023-12-17",
    ImagenURL:
      "https://gravatar.com/avatar/a67434a31f91352c1d83e6fc1be9ef8d?s=400&d=robohash&r=x",
  },
  {
    id: 3,
    Nombre: "Alice Johnson",
    Cedula: "456123789",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-16",
    ImagenURL:
      "https://gravatar.com/avatar/d87db6af697e1f3ade06a51a51a451a0?s=400&d=robohash&r=x",
  },
  {
    id: 4,
    Nombre: "Bob Williams",
    Cedula: "789456123",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-15",
    ImagenURL:
      "https://gravatar.com/avatar/7cbdb4f5c7f67818405a19c65c68b9d5?s=400&d=robohash&r=x",
  },
  {
    id: 5,
    Nombre: "Eva Brown",
    Cedula: "321654987",
    Estado: "Inactivo",
    UltimaActualizacion: "2023-12-14",
    ImagenURL:
      "https://gravatar.com/avatar/d53bbda0f77d9a6232ad725a71b1b59c?s=400&d=robohash&r=x",
  },
  {
    id: 6,
    Nombre: "David Lee",
    Cedula: "654789321",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-13",
    ImagenURL:
      "https://gravatar.com/avatar/1416ad1713384c2c7ceb7599faf305d8?s=400&d=robohash&r=x",
  },
  {
    id: 7,
    Nombre: "Sophia Garcia",
    Cedula: "159263478",
    Estado: "Inactivo",
    UltimaActualizacion: "2023-12-12",
    ImagenURL:
      "https://gravatar.com/avatar/7a72e5152dd058dcc34dba9d211bd393?s=400&d=robohash&r=x",
  },
  {
    id: 8,
    Nombre: "Lucas Martinez",
    Cedula: "852741963",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-11",
    ImagenURL:
      "https://gravatar.com/avatar/e7172b490ca7a1a62de5474d52503b3f?s=400&d=robohash&r=x",
  },
  {
    id: 9,
    Nombre: "Olivia Clark",
    Cedula: "369852147",
    Estado: "Activo",
    UltimaActualizacion: "2023-12-10",
    ImagenURL:
      "https://gravatar.com/avatar/0fce991e5194c4f7f4b963fd85bc7ec9?s=400&d=robohash&r=x",
  },
  {
    id: 10,
    Nombre: "Liam Taylor",
    Cedula: "147258369",
    Estado: "Inactivo",
    UltimaActualizacion: "2023-12-09",
    ImagenURL:
      "https://gravatar.com/avatar/a70abbf760cc113f06bc7f2c0a51dfb4?s=400&d=robohash&r=x",
  },
];

export default function ExpedientesList() {
  return (
    <Grid
      className="Grid"
      container
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid xs={12}>
        <ExpedientesSearchBar />
        <Divider />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ maxHeight: "650px", overflowY: "auto" }}>
          <Grid spacing={1} container disableEqualOverflow>
            {data.map((expediente, index) => (
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
