import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/joy/Avatar";
import { useNavigate } from "react-router-dom";

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
    console.log("Card clicked!");
    navigate(`/expediente/${expediente.id}`);
  };

  return (
    <Box
      sx={{
        width: "97%",
      }}
      onClick={handleCardClick}
    >
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
          resize: "horizontal",
        }}
      >
        <Avatar
          src={expediente.ImagenURL}
          sx={{ "--Avatar-size": isHovered ? "6rem" : "5rem", margin: "auto" }}
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
              <Typography fontWeight="lg">{expediente.Nombre}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Cedula
              </Typography>
              <Typography fontWeight="lg">{expediente.Cedula}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Estado
              </Typography>
              <Typography fontWeight="lg">{expediente.Estado}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Ultima Actualizacion
              </Typography>
              <Typography fontWeight="lg">
                {expediente.UltimaActualizacion}
              </Typography>
            </div>
          </Sheet>
        </CardContent>
      </Card>
    </Box>
  );
}
