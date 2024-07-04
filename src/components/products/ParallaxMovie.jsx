import React from "react";
import { Box, Typography } from "@mui/material";

const ParallaxMovie = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(https://fullhdoboi.ru/wp-content/uploads/_ph/4/496545428.jpg)`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontFamily: "Circular Std, Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "4rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      >
        MOVIE's
      </Typography>
    </Box>
  );
};

export default ParallaxMovie;
