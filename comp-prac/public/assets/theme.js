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
  components: {
    MuiFab: {
      styleOverrides: {
        // root수준에서 바꾸면 모든 항목이 바뀐다. 조심히 사용
        // 모든 Fab button이 바뀜
        root: {
          backgroundColor: "red",
        },
        // font-size가 small인 것에 대해 바뀜
        sizeSmall: {
          backgroundColor: "red",
        },
        // color:가 secondary로 지정된 것에 대해 바뀜
        secondary: {
          backgroundColor: "red",

          // 마우스를 올렸을 때 바뀌는 색을 white로 지정
          "&:hover": {
            color: "white",
          },
        },
      },
    },

    // AppBar 모든 component에 대해 danger 배경색, marginbottom 50px를 추가한다.
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: dangerColor,
          marginBottom: 50,
        },
      },
    },
  },
});

export default customTheme;

// 전체를 ThemeProvider로 감싼 뒤 prop으로 만든 테마를 보낸다. ( <ThemeProvider theme={customTheme}> )
