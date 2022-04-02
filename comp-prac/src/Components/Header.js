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
} from "@mui/material";
import jbnu from "../assets/jbnu.png";
import { Menu, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const Header = () => {
  const HeaderMediaQuery = useMediaQuery("(min-width: 1200px)");

  const [sideOpen, setSideOpen] = React.useState(false);

  const isShowNavigator = () => {
    return HeaderMediaQuery ? "visible" : "hidden";
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
                  fullWidth
                  sx={{
                    color: "black",
                    display: "left",
                  }}
                  onClick={() => navigate("./article")}
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
            <Grid item xs={8}></Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                display="flex"
                sx={{
                  width: "100%",
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
                  ml: "20%",
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
              aria-label="side_menu"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                ml: "10%",
              }}
            >
              <Menu />
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
    </div>
  );
};

export default Header;
