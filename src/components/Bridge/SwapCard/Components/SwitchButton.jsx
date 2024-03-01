import { Box } from "@chakra-ui/react";
import "../style.css";
import SwitchArrows from "../Assets/SwitchArrows.jsx";

const SwitchButton = () => {
  return (
    <Box
      className={"swapContainer"}
      justifyContent={"center"}
      mt={0}
      mb={"20px"}
      zIndex={-1}
    >
      <SwitchArrows />
    </Box>
  );
};

export default SwitchButton;
