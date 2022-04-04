import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Button onClick={() => navigate("./article")}>버튼</Button>
      <Footer />
    </div>
  );
};

export default Home;
