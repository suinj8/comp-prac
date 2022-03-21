import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CameraIcon from "@material-ui/icons/Camera";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardActionArea, MenuItem, Menu } from "@mui/material";
import Move from "./Move";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.jbnu.ac.kr/kor/">
        Jeonbuk National University
      </Link>{" "}
      All rights reserved.
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const theme = createTheme();

export default function Album() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            언론보도
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="relative">
        <Toolbar>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
            ml={"10px"}
          >
            소식
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>소개</MenuItem>
            <MenuItem onClick={handleClose}>연구</MenuItem>
            <MenuItem onClick={handleClose}>구성원</MenuItem>
            <MenuItem onClick={handleClose}>소식</MenuItem>
            <MenuItem onClick={handleClose}>지원하기</MenuItem>
          </Menu>

          <Button
            id="basic-button2"
            aria-controls={open ? "basic-menu2" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick2}
            color="inherit"
          >
            언론보도
          </Button>
          <Menu
            id="basic-menu2"
            anchorEl={anchorEl2}
            open={open}
            onClose={handleClose2}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            <MenuItem onClick={handleClose2}>소식통</MenuItem>
            <MenuItem onClick={handleClose2}>공지사항</MenuItem>
            <MenuItem onClick={handleClose2}>언론보도</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Move />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 2,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row" // column으로 할 시 위 아래로 배치
              spacing={2} // 자식 컴포넌트들 사이를 띄어놓음
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 5 }} fixed>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        pt: "45%",
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h1">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" color="text.secondary">
          JBNU AI Center
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          전북대학교
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
