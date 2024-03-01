import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import PropTypes from "prop-types";

const HeroBackground = ({ children }) => {
  const [isLessThan1500] = useMediaQuery("(max-width: 1500px)");

  return (
    <Box h={"100%"} position={"relative"} w={"100%"}>
      <Image
        src="/assets/heroCube.svg"
        alt="background image"
        width={"93px"}
        height={"83px"}
        ml={"3%"}
        position={"absolute"}
      />
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        columnGap={"10px"}
        rowGap={"20px"}
        w={"100%"}
        flexDir={{ base: "column", md: "row" }}
      >
        {children}
        <Image
          src="/assets/heroCubes.svg"
          alt="backgroun image"
          objectFit={"contain"}
          w={isLessThan1500 ? "400px" : "745px"}
        />
      </Flex>
    </Box>
  );
};

HeroBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroBackground;
