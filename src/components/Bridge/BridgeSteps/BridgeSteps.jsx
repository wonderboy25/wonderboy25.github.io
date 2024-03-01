import { Box, VStack } from "@chakra-ui/react";
import "./style.css";
import "../sharedStyles.css";
import StepsHeader from "./Components/Header.jsx";
import StepsSection from "./Components/StepsSection.jsx";
import { stepsText } from "./stepsText.js";

const BridgeSteps = () => {
  return (
    <Box
      className={"cardBorder"}
      ml={0}
      mb={0}
      py={"30px"}
      px={"40px"}
      h={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <StepsHeader />
      <VStack rowGap={"16px"} maxW={"400px"}>
        {stepsText.map(({ title, body }, index) => {
          return <StepsSection title={title} body={body} key={index} />;
        })}
      </VStack>
    </Box>
  );
};

export default BridgeSteps;
