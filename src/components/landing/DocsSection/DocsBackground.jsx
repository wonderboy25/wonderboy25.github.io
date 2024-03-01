import { Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const DocsBackground = ({ children }) => {
  return (
    <Box position={"relative"}>
      <Image
        src="/assets/docsCubesRight.svg"
        alt="background image"
        position={"absolute"}
        right={{ base: 0, lg: "5%" }}
        top={{ base: "20%", lg: "10%" }}
        w={{ base: "195px", lg: "397px" }}
        objectFit={"contain"}
        opacity={"0.4"}
      />
      <Image
        src="/assets/docsCubesLeft.svg"
        alt="background image"
        position={"absolute"}
        left={{ base: "-2%", lg: "-17%", "2xl": 0 }}
        top={{ lg: "20%" }}
        bottom={{ base: "1%" }}
        w={{ base: "374px", lg: "744px" }}
        objectFit={"contain"}
        opacity={"0.4"}
      />

      {children}
    </Box>
  );
};

DocsBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DocsBackground;
