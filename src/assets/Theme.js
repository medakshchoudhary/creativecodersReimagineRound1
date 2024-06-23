// theme.js

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black as primary color
    },
    secondary: {
      main: '#FF0000', // Red as secondary color
    },
    background: {
      default: '#FFFFFF', // White as background color
    },
    text: {
      primary: '#FFFFFF', // Black text color
      secondary: '#E23744',
      tertiary: '#000000', // Red text color for secondary text
    },
  },
  typography: {
    fontFamily: 'Metropolis, Arial, sans-serif', // Set Metropolis as the primary font family
    h1: {
      fontSize: '2.5rem', // Customize as needed
    },
    body1: {
      fontSize: '1rem', // Customize as needed
    },
  },
});

export default theme;
