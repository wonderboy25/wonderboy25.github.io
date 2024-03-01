import { Box, Text } from "@chakra-ui/react";
import "../style.css";

const StepsSection = (props) => {
  const { title, body } = props;

  return (
    <Box w={"100%"}>
      <Box className={"buttonContainer"}>
        <Text fontSize={"14px"}>{title}</Text>
      </Box>
      <Box className={"contentContainer"}>
        <Text fontSize={"12px"}>{body}</Text>
      </Box>
    </Box>
  );
};

export default StepsSection;
