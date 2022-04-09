import { Divider, Grid, Typography } from "@mui/material";

const SubHeader = ({ main, sub }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={1} />
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#FFFFFF",
              color: "text.secondary",
              alignItems: "center",
              ml: "5%",
            }}
          >
            {main}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2}>
          <Typography
            variant="subtitle1"
            sx={{
              bgcolor: "#FFFFFF",
              color: "text.secondary",
              alignItems: "center",
              ml: "5%",
            }}
          >
            {sub}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
      </Grid>
      <Divider />
    </div>
  );
};

export default SubHeader;
