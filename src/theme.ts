import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f00",
      light: "0f0",
    },
    secondary: {
      main: "#000",
    },
    success: {
      main: "#00f",
      light:"#0f0"
    },
  },
});

export default theme