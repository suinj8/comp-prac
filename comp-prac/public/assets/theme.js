import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const primaryColor = purple[600];
const secondaryColor = purple[50];
const dangerColor = purple[100];

const customTheme = createTheme({
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

export default customTheme;

// 전체를 ThemeProvider로 감싼 뒤 prop으로 만든 테마를 보낸다. ( <ThemeProvider theme={customTheme}> )
