import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useMediaQuery,
} from "@chakra-ui/react";
import StartCard from "./StartCard.jsx";
import CubesBackground from "../../Shared/CubesBackground.jsx";

const StartNowSection = () => {
  const [isMoreThan983] = useMediaQuery("(min-width: 983px)");

  return (
    <Box as={"section"} w={"100%"} py={{ base: "60px", md: "120px" }}>
      <CubesBackground>
        <Center flexDir={"column"} w={"100%"}>
          <Heading
            fontSize={{ base: "34px", md: "60px" }}
            fontWeight={700}
            letterSpacing={"2.4px"}
            w={"100%"}
            textAlign={"center"}
          >
            Get Started Now
          </Heading>
          <SimpleGrid
            columns={2}
            columnGap={"30px"}
            rowGap={"20px"}
            mt={{ base: "40px", md: "80px" }}
            templateColumns={{
              base: "362px",
              md: isMoreThan983 ? "repeat(2, 362px)" : "repeat(1, 362px)",
            }}
          >
            <StartCard
              title="Staking"
              subTitle="Coming soon"
              body="OrdiBridge offers a staking feature that allows users to stake $SABR and receive other BRC ecological tokens in return.

              This not only enhances the visibility of various BRC ecological projects but also contributes to maintaining the stability of the $SABR ecosystem.

              By engaging in staking, users are incentivized to retain their assets, potentially reducing selling pressure in the market and fostering a more stable token environment.

              The staking mechanism also enables active participation in the Bitcoin network, unlocking the potential value of BRC-20 tokens This approach aligns with the broader trend of staking, which allows crypto users to earn rewards while holding their assets, thereby promoting network participation and value retention."
              enabled={false}
            />
            <StartCard
              title="AMM"
              subTitle="Coming soon"
              body="OrdiBridge is developping the Ordinals Automated Market Maker (OAMM), a decentralized exchange protocol specifically tailored for the trading of BRC20 tokens.

              This protocol harnesses the principles of automated market making to provide liquidity, facilitate seamless token swaps, and support efficient price discovery for BRC20 tokens."
              enabled={false}
            />
          </SimpleGrid>
          <SimpleGrid
            columns={2}
            columnGap={"30px"}
            rowGap={"20px"}
            mt={{ base: "40px", md: "80px" }}
            templateColumns={{
              base: "362px",
              md: isMoreThan983 ? "repeat(2, 362px)" : "repeat(1, 362px)",
            }}
          >
            <StartCard
              title="Farming"
              subTitle="Coming soon"
              body="OrdiBridge provides an opportunity for the BRC community to earn additional tokens through farming.

              This involves staking preferred tokens in selected pools or providing liquidity, and participants are rewarded for their contribution.

              This not only allows users to earn additional tokens but also plays an important role in enhancing the liquidity of the BRC ecosystem."
              w={"362px"}
              enabled={false}
            />
            <StartCard
              title="NFT Bridge"
              subTitle="Coming soon"
              body="OrdiBridge's NFT cross-chain bridge is designed to facilitate two-way cross-chain transfers, with the aim of enhancing liquidity for BTC on EVM networks.

              This cross-chain capability also confers higher and unique value to NFTs, ensuring their one-to-one matching while accommodating the distinctive characteristics of NFTs across different chains.

              The NFT cross-chain bridge is part of OrdiBridge's broader efforts to unlock liquidity for BRC20 tokens on EVM networks, thereby promoting seamless interoperability and value transfer across different blockchain ecosystems."
              w={"362px"}
              enabled={false}
            />
          </SimpleGrid>
        </Center>
      </CubesBackground>
    </Box>
  );
};
export default StartNowSection;
