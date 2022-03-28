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
  const match = useMediaQuery("(min-width:850px)");

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          minHeight: 80,
          maxHeight: 80,
          alignItems: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Card>
              <CardMedia component="img" image={jbnu} alt="jbnu logo" />
            </Card>
          </Grid>
          <Grid item xs={7}>
            <Typography
              variant="h4"
              sx={{
                bgcolor: `${match} ? #000000 : #FFFFFF`,
              }}
            >
              Main Navigator
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              sx={{
                alignItems: "center",
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
                alignItems: "center",
                flexDirection: "row",
                height: "85%",
                width: "100%",
              }}
            >
              <Button>KR</Button>
              <Button>EN</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="side_menu"
              size="large"
              sx={{
                display: "flex",
                alignItems: "center",
                m: "0 auto",
              }}
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
