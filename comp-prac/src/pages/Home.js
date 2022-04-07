import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Card, CardMedia, Typography, Grow } from "@mui/material";

import MainImage from "../assets/MainImage.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <article>
        <Grow in="true" timeout={2500}>
          <Typography
            sx={{
              position: "absolute",
              color: "black",
              left: "33%",
              top: "20%",
              fontSize: "50px",
              textShadow: "4px 4px 4px gray",
            }}
          >
            전북대학교 AI 센터
          </Typography>
        </Grow>
        <Card sx={{ width: "100%", bgcolor: "white" }}>
          <CardMedia component="img" height="100%" image={MainImage} />
        </Card>
      </article>
      <Footer />
    </div>
  );
};

export default Home;
