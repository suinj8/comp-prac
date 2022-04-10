import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SubHeader from "../Components/SubHeader";

import { Grid, Box, Button, Typography } from "@mui/material";

const Apply = () => {
  return (
    <>
      <Header />
      <SubHeader main={"지원하기"} sub={"지원하기"} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "80%",
            height: "300px",
            mt: "3%",
            mb: "2%",
            border: "1px solid green",
          }}
        >
          <Typography variant="h1">연구실 설명</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "80%", mb: "3%", height: "180px" }}>
          <Box
            sx={{
              width: "68%",
              border: "1px solid",
              mr: "2%",
            }}
          >
            <Typography variant="h1">지원 기간</Typography>
          </Box>
          <Box sx={{ width: "30%", border: "1px solid" }}>
            <Button
              sx={{
                width: "100%",
                height: "100%",
                color: "black",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              지원하기
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Apply;
