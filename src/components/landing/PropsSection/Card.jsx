import "./cards.css";
import { Box, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const Card = (props) => {
  const { title, subTitle, body, white } = props;

  return (
    <Box className={white ? "card-body-gradient" : "card-body"}>
      <Heading as={"h2"} size={"md"}>
        <Box
          style={{
            margin: "25px 20px 12px",
            fontSize: "30px",
          }}
          className={white ? "cardHeaderWhite" : "cardHeader"}
        >
          {title}
        </Box>
        <Box
          style={{
            margin: "0px 20px 30px",
            fontSize: "20px",
            color: "#f8f8f8",
            opacity: "0.5",
          }}
        >
          {subTitle}
        </Box>
        <Box
          style={{
            margin: "0px 20px 40px",
            lineHeight: "1.75",
            fontSize: "14px",
            color: "#f8f8f8",
            opacity: "0.9",
          }}
        >
          {body}
        </Box>
      </Heading>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  white: PropTypes.bool,
};
