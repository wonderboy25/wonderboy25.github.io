import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const BridgeSection = () => {
  return (
    <Center
      as="section"
      backgroundImage={"url('/assets/texturesBackground.svg')"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      minH={"80vh"}
      w={"100%"}
      py={{ base: "60px", md: "120px" }}
    >
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        columnGap={"100px"}
        rowGap={"40px"}
        maxW={{ md: "80%" }}
        mx={{ base: "30px", md: 0 }}
      >
        <Image
          src="/assets/bridgeImage.svg"
          alt="bridge image"
          w={{ base: "296px", lg: "488px" }}
          // h={"506px"}
          objectFit={"contain"}
        />
        <VStack w={{ md: "50%" }} alignItems={"flex-start"} spacing={0}>
          <Heading
            mb={"30px"}
            fontSize={{ base: "34px", lg: "60px" }}
            color={"brand.green"}
            fontWeight={700}
          >
            OrdiBridge
          </Heading>
          <Text
            mb={{ base: "25px", md: "50px" }}
            fontSize={{ base: "15px", lg: "16px" }}
            fontWeight={400}
          >
            OrdiBridge's cross-chain asset bridge enables users to move BRC-20
            tokens seamlessly between different blockchain networks, offering
            them flexibility and accessibility. This facilitates the provision
            of deep liquidity to the relatively illiquid market of BRC-20 tokens
            and creates a gateway for users unfamiliar with the BRC-20 ecosystem
            and its marketplaces. By utilizing OrdiBridge, users can enjoy
            several benefits and advantages:
          </Text>
          <Text
            mb={{ base: "30px", md: "60px" }}
            fontSize={{ base: "15px", lg: "16px" }}
            fontWeight={400}
          >
            Enhance liquidity for current BRC-20 token holders, fostering a
            vibrant and dynamic ecosystem. Open up various avenues of multiple
            types of token exchanges, such as orderbook and Automated Market
            Maker (AMM) systems. Tap into a fully developed portfolio of
            decentralized applications (dApps) associated with the ERC-20 token
            ecosystem, including token locking for team tokens and
            lending/borrowing against blue-chip BRC-20s. These benefits make
            OrdiBridge a valuable tool for users looking to access the BRC-20
            ecosystem and participate in its growth and development.
          </Text>
          <Flex
            w={"100%"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Button
              variant={"border"}
              borderColor={"brand.green"}
              bgGradient={
                "linear-gradient(136deg, rgba(93, 7, 249, 0.20) 0%, rgba(5, 240, 176, 0.20) 98.79%)"
              }
              backdropFilter={"10px"}
              height={"52px"}
              width={"264px"}
            >
              Enter Bridge
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Center>
  );
};
export default BridgeSection;
