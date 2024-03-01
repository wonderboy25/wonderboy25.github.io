import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const HowWorksSection = () => {
  return (
    <VStack
      as="section"
      alignItems={"center"}
      mt={{ base: "120px", md: "80px" }}
    >
      <VStack w={{ base: "80%", lg: "900px" }} spacing={"30px"} mb={"80px"}>
        <Heading
          fontSize={{ base: "34px", md: "60px" }}
          fontWeight={700}
          background={
            "linear-gradient(133deg, rgba(93, 7, 249, 0.80) 0%, rgba(5, 240, 176, 0.80) 83.25%)"
          }
          backgroundClip={"text"}
          letterSpacing={"2.4px"}
        >
          How it all works
        </Heading>
        <Text textAlign={"center"} fontSize={{ base: "15px", md: "16px" }}>
          OrdiBridge aims to streamline the cross-chain transfer of BRC20 tokens
          from the Bitcoin network to multiple EVM networks, allowing users to
          send their BRC20 tokens to a dedicated BRC20 address. Once confirmed,
          these tokens are made available for minting on EVM networks. Through
          our solution, OrdiBridge provides a user-friendly and secure platform
          for seamless cross-chain token transfer, enhancing the
          interoperability between Bitcoin's BRC20 and EVM networks. This
          approach aligns with the growing focus on cross-chain bridges, which
          are essential for enabling the transfer of assets and data across
          different blockchain networks.
        </Text>
      </VStack>
      <Image
        src={"/assets/howWorksImage.svg"}
        alt="how works image"
        px={"30px"}
        display={{ base: "none", lg: "block" }}
      />
      <Image
        src={"/assets/howWorksMobile.svg"}
        alt="how works image"
        px={"30px"}
        display={{ base: "block", lg: "none" }}
      />
    </VStack>
  );
};
export default HowWorksSection;
