import * as React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Divider,
  CssBaseline,
} from "@mui/material";
import jbnu from "../assets/jbnu.png";
import Menu from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Grid container spacing={1} sx={{ maxHeight: 80 }}>
      <CssBaseline />
      <Grid item xs={1}>
        <Card sx={{ maxHeight: 80 }}>
          <CardMedia component="img" image={jbnu} alt="jbnu logo" />
        </Card>
      </Grid>
      <Grid item xs={7}>
        Main Navigator
      </Grid>
      <Grid item xs={2}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          size="small"
          sx={{
            display: "flex",
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
        <div>
          <IconButton
            aria-label="side_menu"
            size="large"
            sx={{
              width: "100%",
            }}
          >
            <Menu />
          </IconButton>
        </div>
      </Grid>
      <Divider
        light
        sx={{
          width: "100%",
        }}
      />
    </Grid>
  );
};

export default Header;
