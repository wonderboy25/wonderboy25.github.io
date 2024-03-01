import { Grid, GridItem } from "@chakra-ui/react";
import BridgeSteps from "../components/Bridge/BridgeSteps/BridgeSteps.jsx";
import TokenInfo from "../components/Bridge/TokenInfoCard/TokenInfo.jsx";
import BridgeSwapCard from "../components/Bridge/SwapCard/BridgeSwap.jsx";
import CubesBridgeBackground from "../components/Shared/CubesBridgeBackground.jsx";
import { useEffect, useState } from "react";
import { getAssetsService } from "../services/getAssets.js";
import { getChainsService } from "../services/getChains.js";
import { useBlockchainStore } from "../store/blockchainStore.js";

const BridgePage = () => {
  // const initialChainState = useBlockchainStore(
  //   (state) => state.initialBlockchains,
  // );
  //
  // const [assets, setAssets] = useState([]);
  // const [chains, setChains] = useState([]);
  //
  // useEffect(() => {
  //   (async () => {
  //     const resultAssets = await getAssetsService();
  //     const resultChains = await getChainsService();
  //     setAssets(resultAssets);
  //     setChains(resultChains);
  //   })();
  // }, []);
  //
  // useEffect(() => {
  //   initialChainState(chains);
  // }, [assets, chains]);

  return (
    <CubesBridgeBackground>
      <Grid
        templateColumns={{
          base: "minmax(1fr, 656px)",
          md: "minmax(425px, 656px) minmax(330px, 460px)",
        }}
        templateRows={{ md: "329px minmax(370px, 1fr)" }}
        justifyContent={"center"}
        gap={"30px"}
        pt={{ base: "20px", md: "60px" }}
        pb={{ base: "80px", md: "140px" }}
        mx={"30px"}
      >
        <GridItem rowSpan={{ base: 1, md: 2 }} colSpan={1}>
          <BridgeSwapCard />
        </GridItem>
        <GridItem>
          <TokenInfo />
        </GridItem>
        <GridItem rowSpan={1} gridColumnStart={{ md: 2 }}>
          <BridgeSteps />
        </GridItem>
      </Grid>
    </CubesBridgeBackground>
  );
};

export default BridgePage;
