import { Box, HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import MenuComponent from "./MenuComponent";
import { useEffect } from "react";
import { useStateStore } from "../../store/stateStore.js";
// import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  const updateUnisatStatus = useStateStore((state) => state.setUnisatStatus);

  useEffect(() => {
    (async () => {
      let unisat = window.unisat;

      for (let i = 1; i < 10 && !unisat; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100 * i));
        unisat = window.unisat;
      }

      updateUnisatStatus(!!unisat);
      if (!unisat) return;
    })();
  }, []);

  return (
    <HStack
      mt={"30px"}
      justify={"space-between"}
      spacing={"8"}
      paddingY={"20px"}
      w={"100%"}
      maxW={"80%"}
      h={"10vh"}
    >
      <ChakraLink href={"/"}>
        <Box display={"flex"} alignItems={"center"}>
          <Image src={"/OrdiBridge.svg"} alt="Logo" h={"50px"} mr={"15px"} />
          <Image src={"/assets/logo.svg"} alt="Logo" h={"25px"} w={"207px"} />
        </Box>
      </ChakraLink>
      <MenuComponent />
    </HStack>
  );
};

export default Header;
