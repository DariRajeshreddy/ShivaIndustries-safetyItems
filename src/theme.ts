import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B71C1C", // Fire Red
    },
    secondary: {
      main: "#F57C00", // Orange Accent
    },
    background: {
      default: "#F9FAFB",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
