import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Container,
  CardActionArea,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../App";

const theme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const dummyArticles = React.useContext(ArticleContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Divider />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 5 }} fixed>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {dummyArticles.map((it) => (
              <Grid item key={it.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h1"
                      sx={{
                        mt: "7px",
                        ml: "7px",
                      }}
                    >
                      {it.title}
                    </Typography>
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
                      onClick={() => navigate(`../article/${it.id}`)}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>{it.content}</Typography>
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
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
