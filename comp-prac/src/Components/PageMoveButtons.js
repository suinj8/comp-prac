import { Box, ButtonGroup, Button } from "@mui/material";

const PageMoveButtons = () => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "black",
      }}
    >
      <ButtonGroup
        variant="outlined"
        size="small"
        aria-label="outlined primary button group"
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          color: "black",
          justifyContent: "center",
          mb: "2%",
        }}
      >
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>>></Button>
      </ButtonGroup>
    </Box>
  );
};

export default PageMoveButtons;
