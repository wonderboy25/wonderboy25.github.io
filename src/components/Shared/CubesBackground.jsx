import { Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CubesBackground = ({ children }) => {
  return (
    <Box position={"relative"} w={"100%"}>
      <Image
        src="/assets/ellipseStartRight.svg"
        alt="background image"
        position={"absolute"}
        right={"18%"}
        top={"-300px"}
        w={"600px"}
        h={"800px"}
        rotate={"45deg"}
      />
      <Image
        src="/assets/cubeStartRight.svg"
        alt="background image"
        position={"absolute"}
        right={"5%"}
        w={"264px"}
        h={"278px"}
      />
      <Image
        src="/assets/cubeStartLeft.svg"
        alt="background image"
        position={"absolute"}
        left={"5%"}
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

CubesBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CubesBackground;
