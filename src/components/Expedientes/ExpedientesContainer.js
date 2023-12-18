import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import "./ExpedientesContainer.css";
import ExpedientesSearchBar from "./ExpedientesSearchBar";
import Divider from "@mui/joy/Divider";
import ExpedientesList from "./ExpedientesList";

function ExpedientesContainer() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "5%" }}>
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
          <ExpedientesList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ExpedientesContainer;
