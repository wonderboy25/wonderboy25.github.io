import { Box, Text } from "@chakra-ui/react";
import "../style.css";

const ConfirmationText = () => {
  return (
    <Box className={"swapContainer"} justifyContent={"center"}>
      <Text opacity={"0.5"} fontSize={"20px"}>
        Estimated 3 blocks to confirm
      </Text>
    </Box>
  );
};

export default ConfirmationText;
