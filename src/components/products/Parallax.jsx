import React from "react";
import { Box, Typography } from "@mui/material";

const Parallax = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1686849530151-BJL3AO4DHGRAZ6B7QX8T/d080_203e.pub16.272.jpg?format=2500w)`,
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
        CARTOON's
      </Typography>
    </Box>
  );
};

export default Parallax;
