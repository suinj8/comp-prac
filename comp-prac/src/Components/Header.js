import * as React from "react";
import {
  Grid,
  Card,
  CardMedia,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  Divider,
  useMediaQuery,
  Typography,
  SwipeableDrawer,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  createTheme,
  ThemeProvider,
  Stack,
  Collapse,
} from "@mui/material";
import jbnu from "../assets/jbnu.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../App.css";

const navigatorItems = [
  {
    id: 1,
    title: "소개",
    contents: ["연구센터소개", "조직도", "연혁", "센터위치"],
  },
  {
    id: 2,
    title: "연구",
    contents: ["AI연구분야", "연구프로젝트", "연구논문", "연구결과데모"],
  },
  {
    id: 3,
    title: "구성원",
    contents: ["참여교수", "운영위원회", "대학원생", "학부 연구원생", "연구원"],
  },
  {
    id: 4,
    title: "소식",
    contents: ["소식통", "공지사항", "언론보도"],
  },
  {
    id: 5,
    title: "지원하기",
    contents: ["지원하기"],
  },
];

const customTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h6: {
          "&:hover": {
            color: "skyblue",
          },
        },
      },
    },
  },
});

const Header = () => {
  const HeaderMediaQuery = useMediaQuery("(min-width: 1200px)");

  const [sideOpen, setSideOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const isShowNavigator = () => {
    return HeaderMediaQuery ? "visible" : "hidden";
  };

  const isShowPopupMenu = () => {
    return HeaderMediaQuery ? "flex" : "none";
  };

  const navigate = useNavigate();

  const DrawerItems = () => {
    return (
      <Card
        sx={{
          height: "100%",
          width: "320px",
          bgcolor: "#0277BD",
          color: "white",
        }}
      >
        <CardMedia sx={{ ml: "7px", my: "7px" }}>
          <IconButton onClick={() => navigate("/")}>
            <Home sx={{ color: "white" }} />
          </IconButton>
        </CardMedia>
        {navigatorItems.map((it) => (
          <Accordion
            sx={{
              bgcolor: "#0277BD",
              color: "white",
            }}
          >
            <AccordionSummary
              aria-controls={`content${it.title}`}
              id={`content${it.title}-header`}
            >
              <Typography variant="subtitle1">{it.title}</Typography>
            </AccordionSummary>
            {it.contents.map((content) => (
              <AccordionDetails
                sx={{ bgcolor: "white", color: "black", pb: "8px" }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "black",
                    justifyContent: "left",
                  }}
                  onClick={() => {}}
                >
                  {content}
                </Button>
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </Card>
    );
  };

  const MainNavigator = () => {
    return (
      <>
        {navigatorItems.map((it) => (
          <Grid item xs={2.4}>
            <Button
              onMouseOver={() => setCollapseOpen(true)}
              sx={{ fontSize: "20px", color: "black" }}
            >
              {it.title}
            </Button>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <div className="header">
      <Box
        sx={{
          display: "flex",
          minHeight: 75,
          maxHeight: 75,
        }}
      >
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
            }}
          >
            <Card
              sx={{
                minWidth: "70px",
                maxWidth: "70px",
                ml: "15px",
                cursor: "pointer",
                boxShadow: "none",
              }}
              onClick={() => navigate("/")}
            >
              <CardMedia component="img" image={jbnu} alt="jbnu logo" />
            </Card>
          </Grid>
          <Grid
            container
            xs={10}
            sx={{
              alignItems: "center",
              width: "100%",
              display: "flex",
              visibility: isShowNavigator,
            }}
          >
            <ThemeProvider theme={customTheme}>
              <Grid container xs={8} sx={{ textAlign: "center" }}>
                <MainNavigator />
              </Grid>
            </ThemeProvider>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                display="flex"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "right",
                  ml: "5%",
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
                size="medium"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  color: "black",
                  ml: "30%",
                }}
              >
                <Button>KR</Button>
                <Button>EN</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                setSideOpen(true);
              }}
              aria-label="side_MenuIcon"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                ml: "10%",
              }}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={sideOpen}
              onClose={() => setSideOpen(false)}
              onOpen={() => {}}
            >
              <DrawerItems />
            </SwipeableDrawer>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Collapse in={collapseOpen}>
        <div className="popupMenu">
          <Grid
            container
            sx={{
              height: "200px",
              position: "absolute",
              zIndex: "5",
              bgcolor: "#ececec",
              display: isShowPopupMenu,
            }}
          >
            <Grid item xs={1} />
            <Grid container xs={10}>
              <Grid container xs={8}>
                {navigatorItems.map((it) => (
                  <>
                    <Divider orientation="vertical" />
                    <Grid item xs>
                      <Stack sx={{ height: "100%" }}>
                        {it.contents.map((content) => (
                          <Button
                            sx={{ height: "20%", color: "black" }}
                            onMouseOver={() => setCollapseOpen(true)}
                            onMouseOut={() => setCollapseOpen(false)}
                          >
                            <Typography variant="subtitle2">
                              {content}
                            </Typography>
                          </Button>
                        ))}
                      </Stack>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Divider orientation="vertical" />
            </Grid>
          </Grid>
          <Divider />
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
