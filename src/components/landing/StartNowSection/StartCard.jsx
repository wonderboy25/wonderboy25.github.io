import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const StartCard = ({ title, subTitle, body, enabled, ...rest }) => {
  const formattedBody = body.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));

  return (
    <Card
      borderRadius={"24px"}
      border={"1px solid var(--linear, #5D07F9)"}
      backgroundColor={"transparent"}
      color={"inherit"}
      {...rest}
    >
      <CardHeader paddingBottom={"16px"}>
        <VStack spacing={"12px"} alignItems={"flex-start"}>
          <Heading
            fontSize={{ base: "24px", md: "30px" }}
            fontWeight={600}
            as={"h3"}
            letterSpacing={"1.2px"}
          >
            {title}
          </Heading>
          <Heading
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={500}
            letterSpacing={"0.8px"}
            opacity={"0.8"}
            as={"h4"}
          >
            {subTitle}
          </Heading>
        </VStack>
      </CardHeader>
      <CardBody pb={"30px"}>
        <Text fontSize={"14px"} fontWeight={400}>
          {formattedBody}
        </Text>
      </CardBody>
      <CardFooter>
        <Tooltip
          isDisabled={enabled}
          label={"Coming soon"}
          hasArrow={true}
          placement={"top"}
        >
          <Button
            h={"52px"}
            w={"100%"}
            variant={"border"}
            bgGradient={
              "linear-gradient(136deg, rgba(93, 7, 249, 0.20) 0%, rgba(5, 240, 176, 0.20) 98.79%)"
            }
            borderColor={"brand.green"}
            color={"brand.green"}
            fontWeight={700}
          >
            Launch App
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

StartCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default StartCard;
