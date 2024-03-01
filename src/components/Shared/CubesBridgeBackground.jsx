import { Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CubesBridgeBackground = ({ children }) => {
  return (
    <Box position={"relative"} w={"100%"}>
      <Image
        src="/assets/ellipseStartRight.svg"
        alt="background image"
        position={"absolute"}
        right={{ base: "5%", md: "25%" }}
        top={{ base: "10%", md: 0 }}
        w={"600px"}
        h={"800px"}
        rotate={"45deg"}
      />
      <Image
        src="/assets/cubeStartRight.svg"
        alt="background image"
        position={"absolute"}
        bottom={"1%"}
        right={"0%"}
        w={"264px"}
        h={"278px"}
      />
      <Image
        src="/assets/cubeStartLeft.svg"
        alt="background image"
        position={"absolute"}
        left={"0%"}
        top={"180px"}
        w={"161px"}
        h={"169px"}
      />
      <Image
        src="/assets/ellipseStartLeft.svg"
        alt="background image"
        position={"absolute"}
        left={0}
        top={"150px"}
        w={"539px"}
        h={"560px"}
      />
      {children}
    </Box>
  );
};

CubesBridgeBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CubesBridgeBackground;
