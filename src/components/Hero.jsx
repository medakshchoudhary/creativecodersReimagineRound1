import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <Box
      id="Hero"
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        color={"text.primary"}
        paragraph
        sx={{ fontSize: "4rem", marginLeft: "2rem", lineHeight: "1.4" }}
        className="tracking-wide"
      >
        HUNGRY?
        <br />
        <img src="./images/zomato-red.svg" className="inline mr-2" />
        IS HERE
        <br />
        <Box component={"span"} color={"text.secondary"}>DELIVERING FOOD AT YOUR DOORSTEPS</Box>
      </Typography>
      <img src="./images/side_logo.svg" className="absolute  top-0 right-0" />
      <Button
        variant="contained"
        sx={{
          fontSize: "1.2rem",
          bottom: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          borderRadius: "20px",
          border: "2px solid",
          borderColor: "text.secondary",
          ":hover": { backgroundColor: "text.primary", color: "black" },
        }}
      >
        Order Now
      </Button>
    </Box>
  );
}

export default Hero;
