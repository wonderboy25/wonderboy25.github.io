import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import DocsCard from "./DocsCard.jsx";
import DocsBackground from "./DocsBackground.jsx";

const DocsSection = () => {
  return (
    <Box
      as="section"
      backgroundImage={"url('/assets/texturesBackground.svg')"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      minH={"80vh"}
      w={"100%"}
    >
      <DocsBackground>
        <Center
          mx={"30px"}
          flexDir={"column"}
          py={{ base: "60px", md: "120px" }}
        >
          <VStack mb={{ base: "40px", md: "80px" }}>
            <Heading
              w={"100%"}
              textAlign={"center"}
              color={"brand.green"}
              fontSize={{ base: "34px", md: "60px" }}
              fontWeight={"700"}
            >
              Get Started Now
            </Heading>
            <Text fontWeight={400} fontSize={{ base: "15px", md: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </VStack>
          <Flex
            justifyContent={"center"}
            columnGap={"30px"}
            rowGap={"20px"}
            flexDir={{ base: "column", md: "row" }}
          >
            <DocsCard
              title="Documentation"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            />
            <DocsCard
              title="Tutorials"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            />
          </Flex>
        </Center>
      </DocsBackground>
    </Box>
  );
};
export default DocsSection;
