import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import "./ExpedientesContainer.css";
import ExpedientesSearchBar from "./ExpedientesSearchBar";

function ExpedientesContainer() {
  return (
    <Container maxWidth="xl">
      <Grid
        className="Grid"
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid xs={12}>
          <ExpedientesSearchBar />
        </Grid>
        <Grid xs={8}>
          <h1>Hello</h1>
        </Grid>
        <Grid xs={8}>
          <h1>Hello</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ExpedientesContainer;
