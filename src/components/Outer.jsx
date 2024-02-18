import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Outer = styled(Box)(({ bgcolor }) => ({
  backgroundColor: bgcolor,
  padding: "60px 0px",
}));

export default Outer;
