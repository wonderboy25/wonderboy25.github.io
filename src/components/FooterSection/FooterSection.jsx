import { Box, Center, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import { menuData } from "../Header/menuData.js";
import {
  GitbookLink,
  TelegramLink,
  TwitterLink,
} from "../../Constants/constants.js";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Center
      as="section"
      w={"100%"}
      bgColor={"#0F0F0F"}
      py={"45px"}
      flexDir={"column"}
      position={"relative"}
    >
      <IconButton
        icon={
          <Image
            src="/assets/topArrow.svg"
            alt={"top arrow"}
            bgColor={"black"}
            borderRadius={"full"}
          />
        }
        borderRadius={"full"}
        position={"absolute"}
        top={"-20px"}
        onClick={scrollToTop}
        _hover={{ opacity: "0.8" }}
      />
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        rowGap={"30px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        px={"10%"}
        mb={"45px"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image src={"/OrdiBridge.svg"} alt="Logo" h={"50px"} mr={"15px"} />
          <Image src={"/assets/logo.svg"} alt="Logo" h={"25px"} w={"207px"} />
        </Box>
        <Flex
          columnGap={10}
          rowGap={"16px"}
          as={"nav"}
          fontSize={"18px"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          {menuData.map(({ name, href }, index) => (
            <Link href={href} key={index} style={{ textDecoration: "none" }}>
              {name}
            </Link>
          ))}
        </Flex>
        <Box>
          <IconButton
            aria-label={"gitbook"}
            icon={<img src="/icons/gitbook.svg" alt="Telegram" />}
            variant={"unstyled"}
            cursor={"pointer"}
            onClick={() => window.open(GitbookLink, "_blank")}
          />
          <IconButton
            aria-label={"telegram"}
            icon={<img src="/icons/Telegram.svg" alt="Telegram" />}
            variant={"unstyled"}
            cursor={"pointer"}
            onClick={() => window.open(TelegramLink, "_blank")}
          />
          <IconButton
            aria-label={"twitter"}
            icon={<img src="/icons/Twitter.svg" alt="twitter" />}
            variant={"unstyled"}
            cursor={"pointer"}
            onClick={() => window.open(TwitterLink, "_blank")}
          />
        </Box>
      </Flex>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ opacity: "0.8" }}
      >
        ©2023 All Rights Reserved - OrdiBridge
      </Box>
    </Center>
  );
};
