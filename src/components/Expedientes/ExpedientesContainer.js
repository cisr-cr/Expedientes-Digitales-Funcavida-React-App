import Container from "@mui/material/Container";
import "./ExpedientesContainer.css";
import { Outlet } from "react-router-dom";

function ExpedientesContainer() {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "5%" }}>
      <Outlet />
    </Container>
  );
}

export default ExpedientesContainer;
