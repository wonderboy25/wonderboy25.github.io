import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import CalendarIcon from "../Calendar.jsx";
import { useStateStore } from "../../../../store/stateStore.js";

const SwapHeader = () => {
  const switchState = useStateStore((state) => state.switchState);
  let swapState = useStateStore((state) => state.swapState);

  swapState = swapState.toLowerCase();
  swapState = swapState.charAt(0).toUpperCase() + swapState.slice(1);

  const swap = swapState === "Deposit" ? "Claim" : "Deposit";

  return (
    <Box className={"swapContainer"} gap={"20px"}>
      <Text className={"cardTitle"}>Bridge</Text>
      <Tooltip label={`Click for ${swap}`}>
        <Button
          w={"175px"}
          display={"flex"}
          alignItems={"center"}
          background={"linear-gradient(147deg, #5D07F9 0%, #05F0B0 95.71%)"}
          borderRadius={"15px"}
          paddingX={"15px"}
          paddingY={"2px"}
          color={"#F8F8F8"}
          _hover={{
            background:
              "linear-gradient(147deg, #5D07F9AA 0%, #05F0B0AA 95.71%)",
          }}
          onClick={() => {
            switchState();
          }}
        >
          <Text fontWeight={600}>{swapState}</Text>
          <CalendarIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default SwapHeader;
