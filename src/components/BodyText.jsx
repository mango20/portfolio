import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BodyText = styled(Box)(({ margin }) => ({
  fontFamily: "Roboto, sans-serif",
  fontSize: "20px",
  marginBottom: margin,
}));

export default BodyText;
