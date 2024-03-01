import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { row1, row2, row3 } from "./data.js";
import "./animation.css";

export const AnimatedBadges = () => (
  <Box as="section" w={"100%"} py={"45px"}>
    <Marquee className={"marquee"}>
      {row1.map((item, index) => (
        <Box className={item.color} id={index} key={index}>
          {item.text}
        </Box>
      ))}
    </Marquee>
    <Marquee direction={"right"} speed={75}>
      {row2.map((item, index) => (
        <Box className={item.color} id={index} key={index}>
          {item.text}
        </Box>
      ))}
    </Marquee>
    <Marquee className={"marquee"} speed={65}>
      {row3.map((item, index) => (
        <Box className={item.color} id={index} key={index}>
          {item.text}
        </Box>
      ))}
    </Marquee>
  </Box>
);
