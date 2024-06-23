import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";

function Search() {
  return (
    <Box
      sx={{
        background: "url(./images/city.jpeg) no-repeat center/cover",
        backgroundSize: "cover",
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <TextField
        placeholder="Search for restaurants, cuisines, or locations"
        variant="outlined"
        fullWidth
        sx={{
          background: "white",
          "& .MuiInputBase-input": {
            color: "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
          "& .MuiInputAdornment-root img": {
            height: "32px",
          },
          borderRadius: "20px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="./images/search.svg" alt="search" className="h-8 cursor-pointer" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default Search;
