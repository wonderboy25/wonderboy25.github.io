import { Box, Button } from "@chakra-ui/react";
import "../style.css";
import { useBlockchainStore } from "../../../../store/blockchainStore.js";

const SwitchArrows = () => {
  const switchBlockchains = useBlockchainStore(
    (state) => state.switchBlockchains,
  );

  return (
    <>
      <Button
        variant={"unstyled"}
        minW={"20px"}
        _hover={{ opacity: "0.65" }}
        onClick={() => switchBlockchains()}
      >
        <Box className={"switchButton"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="tabler:arrows-sort">
              <path
                id="Vector"
                d="M3 9L7 5M7 5L11 9M7 5V19M21 15L17 19M17 19L13 15M17 19V5"
                stroke="#F8F8F8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Box>
      </Button>
    </>
  );
};

export default SwitchArrows;
