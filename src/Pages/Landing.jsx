import HeroSection from "../components/landing/HeroSection/index.jsx";
import BridgeSection from "../components/landing/BridgeSection/index.jsx";
import { AnimatedBadges } from "../components/landing/BadgesSection/AnimatedBadges.jsx";
import { PropertiesCards } from "../components/landing/PropsSection/PropertiesCards.jsx";
import HowWorksSection from "../components/landing/HowWorksSection/index.jsx";
import StartNowSection from "../components/landing/StartNowSection/index.jsx";
import { useEffect } from "react";
import { getChainsService } from "../services/getChains.js";

const Landing = () => {
  // useEffect(() => {
  //   (async () => {
  //     const chains = await getChainsService();
  //   })();
  // }, []);

  return (
    <>
      <HeroSection />
      <BridgeSection />
      <AnimatedBadges />
      <PropertiesCards />
      <HowWorksSection />
      <StartNowSection />
      {/*<DocsSection />*/}
    </>
  );
};

export default Landing;
