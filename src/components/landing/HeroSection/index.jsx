import {
  Box,
  Button,
  Flex,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import HeroBackground from "./HeroBackground.jsx";

const HeroSection = () => {
  const [isLessThan1482] = useMediaQuery("(max-width: 1482px)");

  return (
    <Box
      as="section"
      w={"100%"}
      minH={isLessThan1482 ? "50vh" : "80vh"}
      pb={"88px"}
      pt={"40px"}
    >
      <HeroBackground>
        <VStack
          spacing={"32px"}
          ml={{ md: "10%" }}
          mx={{ base: "30px" }}
          alignItems={"flex-start"}
        >
          <Text
            fontSize={{ base: "16px", xl: "18px" }}
            fontWeight={300}
            maxW={"600px"}
            color={"#F8F8F8"}
          >
            OrdiBridge's mission is to support the Bitcoin ecosystem, facilitate
            the seamless transfer of value across different networks through
            cross-chain methods, and broaden the scope of economic activities
            for users. Additionally, it aims to simplify the process of
            transferring BRC20 tokens to other networks.
          </Text>
          <Text fontSize={{ base: "12px", xl: "18px" }}>
            <span style={{ color: "#05F0B0" }}>CA: </span>
            0x0000000000000000000000000000000000dead
          </Text>
          <Flex
            justifyContent={{ base: "center", md: "flex-start" }}
            w={"100%"}
          >
            <Button
              bgGradient={"linear-gradient(136deg, #5D07F9 0%, #05F0B0 98.79%)"}
              fontWeight={700}
              // color={"inherit"}
              h={"48px"}
              w={"300px"}
            >
              Trading On UniSwap
            </Button>
          </Flex>
        </VStack>
      </HeroBackground>
    </Box>
  );
};
export default HeroSection;
