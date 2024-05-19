import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/joy/Avatar";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Costa_Rica",
  };
  return new Date(dateString).toLocaleDateString("es-CR", options);
};

export default function ExpedientesSummary({ expediente }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    navigate(`/expediente/${expediente._id}`);
  };

  return (
    <Box sx={{ width: "96%", mb: 2 }} onClick={handleCardClick}>
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        orientation="horizontal"
        sx={{
          cursor: isHovered ? "pointer" : "default",
          boxShadow: isHovered ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none",
          transition: "box-shadow 0.3s ease-in-out",
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
        }}
      >
        <Avatar
          src={expediente.InformacionPaciente.Foto}
          sx={{
            "--Avatar-size": isHovered ? "6rem" : "5rem",
            margin: "auto",
          }}
        />
        <CardContent>
          <Sheet
            sx={{
              bgcolor: isHovered ? "#FFB466" : "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Nombre
              </Typography>
              <Typography variant="body2">
                {expediente.InformacionPaciente.Nombre}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Cédula
              </Typography>
              <Typography variant="body2">
                {expediente.InformacionPaciente.Cedula}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Estado
              </Typography>
              <Typography variant="body2">
                {expediente.InformacionGeneral.EstadoExpediente}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Última Actualización
              </Typography>
              <Typography variant="body2">
                {formatDate(expediente.InformacionGeneral.UltimaActualizacion)}
              </Typography>
            </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}
