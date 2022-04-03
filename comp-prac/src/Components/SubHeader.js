import { Divider, Grid, Typography } from "@mui/material";

const SubHeader = () => {
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
            소식
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
            언론보도
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
      </Grid>
    </div>
  );
};

export default SubHeader;
