import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const DocsCard = ({ title, body }) => {
  return (
    <Card
      maxW={{ base: "300px", md: "558px" }}
      minW={"300px"}
      borderRadius={"24px"}
      backgroundColor={"rgba(3, 3, 3, 0.40)"}
      backdropFilter={"blur(15px)"}
      color={"inherit"}
    >
      <CardHeader pb={"16px"}>
        <Heading
          fontSize={{ base: "24px", md: "30px" }}
          fontWeight={600}
          letterSpacing={"1.2px"}
        >
          {title}
        </Heading>
      </CardHeader>
      <CardBody pb={"30px"} pt={0}>
        <Text fontSize={"14px"} fontWeight={400}>
          {body}
        </Text>
      </CardBody>
      <CardFooter pt={0}>
        <Button
          variant={"border"}
          borderColor={"brand.green"}
          borderRadius={"30px"}
          bgGradient={
            "linear-gradient(136deg, rgba(93, 7, 249, 0.20) 0%, rgba(5, 240, 176, 0.20) 98.79%)"
          }
          backdropFilter={"blur(10px)"}
          w={"100%"}
        >
          View here
        </Button>
      </CardFooter>
    </Card>
  );
};

DocsCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default DocsCard;
