import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Title = styled(Box)(({ align, color }) => ({
  textAlign: align,
  fontFamily: "Anton, sans-serif",
  fontSize: "57px",
  marginBottom: "30px",
  textTransform: "uppercase",
  color: color,
}));

export default Title;
