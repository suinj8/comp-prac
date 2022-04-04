import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  CardActionArea,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../App";

import jbnu from "../assets/jbnu.png";

const theme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const dummyArticles = React.useContext(ArticleContext);
  return (
    <ThemeProvider theme={theme}>
      <Divider />
      <Container sx={{ py: 5 }} fixed>
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
                <CardActionArea onClick={() => navigate(`../article/${it.id}`)}>
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
                  <CardMedia component="img" image={jbnu} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>{it.content}</Typography>
                  </CardContent>
                  <Typography
                    variant="subtitle2"
                    component="subtitle1"
                    color="text.secondary"
                    sx={{ p: "16px" }}
                  >
                    {it.date}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
