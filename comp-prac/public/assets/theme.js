import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = purple[50];
const dangerColor = purple[100];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
});

export default theme;
