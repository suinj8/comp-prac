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
} from "@mui/material";
import jbnu from "../assets/jbnu.png";
import Menu from "@mui/icons-material/Menu";

const Header = () => {
  const HeaderMediaQuery = useMediaQuery("(min-width: 1200px)");

  const isShowNavigator = () => {
    return HeaderMediaQuery ? "visible" : "hidden";
  };

  const clickSideMenu = () => {
    return <div>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>;
  };
  return (
    <div>
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
              }}
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
            <Grid item xs={8}>
              <Typography
                variant="h6"
                sx={{
                  bgcolor: "#FFFFFF",
                  pl: "3%",
                }}
              >
                Main Navigator
              </Typography>
            </Grid>
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
                }}
              >
                <Button>KR</Button>
                <Button>EN</Button>
              </ButtonGroup>
            </Grid>
          </Grid>

          <Grid item xs={1}>
            <IconButton
              aria-label="side_menu"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
              onClick={clickSideMenu}
            >
              <Menu />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Divider />
    </div>
  );
};

export default Header;
