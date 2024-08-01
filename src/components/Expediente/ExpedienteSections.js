import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Notas from "../Sections/Notas";
import HistorialMedico from "../Sections/HistorialMedico";
import InfoPersonal from "../Sections/InfoPersonal";
import "./ExpedienteSections.css";
import RutinasDeBienestar from "../Sections/RutinasDeBienestar";

export default function ExpedienteSections({
  clickedExpediente,
  handleSaveExpediente,
}) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="ExpedienteSections">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="expediente sections tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Notas" value="1" />
            <Tab label="Información Personal" value="2" />
            <Tab label="Historial Médico" value="3" />
            <Tab label="Rutinas de Bienestar" value="4" />
            <Tab label="Plan Nutricional" value="5" />
            <Tab label="Datos Familiares" value="6" />
            <Tab label="Turismo" value="7" />
            <Tab label="Reinserción Laboral" value="8" />
            <Tab label="Terapias" value="9" />
            <Tab label="Talleres ocupacionales" value="10" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Notas notas={clickedExpediente.Notas} />
        </TabPanel>
        <TabPanel value="2">
          <InfoPersonal
            infoPersonal={clickedExpediente}
            handleSaveExpediente={handleSaveExpediente}
          />
        </TabPanel>
        <TabPanel value="3">
          <HistorialMedico
            historialMedico={clickedExpediente}
            handleSaveExpediente={handleSaveExpediente}
          />
        </TabPanel>
        <TabPanel value="4">
          <RutinasDeBienestar
            rutinasDeBienestar={clickedExpediente}
            handleSaveExpediente={handleSaveExpediente}
          />
        </TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
        <TabPanel value="7">Item Seven</TabPanel>
        <TabPanel value="8">Item Eight</TabPanel>
        <TabPanel value="9">Item Nine</TabPanel>
        <TabPanel value="10">Item Ten</TabPanel>
      </TabContext>
    </Box>
  );
}
