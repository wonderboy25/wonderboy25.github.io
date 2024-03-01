import { Center, Flex, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import "./cards.css";
import { Card } from "./Card.jsx";

export const PropertiesCards = () => {
  const [isMoreThan1432] = useMediaQuery("(min-width: 1432px)");

  return (
    <Center as={"section"} w={"100%"}>
      <SimpleGrid
        templateColumns={{
          base: "362px",
          md: isMoreThan1432 ? "repeat(3, 362px)" : "repeat(2, 362px)",
        }}
        columnGap={"30px"}
      >
        <Card
          title={"Security"}
          subTitle={""}
          body={
            "We take security very seriously. We have a dedicated team of security experts who continuously monitor our platform and work with the community to perform extensive security audits."
          }
        />
        <Card
          title={"User Experience"}
          subTitle={""}
          body={
            "We are committed to providing the best user experience. We have a dedicated team of UX experts who continuously work to improve the user experience."
          }
          white={true}
        />
        <Flex
          gridColumnStart={isMoreThan1432 ? 3 : 1}
          gridColumnEnd={-1}
          justifyContent={"center"}
        >
          <Card
            title={"Scalability"}
            subTitle={""}
            body={
              "Our platform is built to scale. We can handle high volumes and are working on adding more blockchains to our platform."
            }
          />
        </Flex>
      </SimpleGrid>
    </Center>
  );
};
