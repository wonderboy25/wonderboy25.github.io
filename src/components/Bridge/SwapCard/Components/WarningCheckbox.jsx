import { Box, Checkbox, Text } from "@chakra-ui/react";
import "../style.css";
import { useStateStore } from "../../../../store/stateStore.js";

const WarningCheckbox = () => {
  const checkBoxValue = useStateStore((state) => state.bridgeCheckbox);
  const setCheckBoxValue = useStateStore((state) => state.setBridgeCheckbox);

  return (
    <Box className={"swapContainer"}>
      <Box className={"warningStyle"}>
        <Checkbox
          colorScheme={"purple"}
          size={"lg"}
          isChecked={checkBoxValue}
          onChange={(e) => {
            setCheckBoxValue(e.target.checked);
          }}
        >
          <Text fontSize={"12px"} ml={"12px"}>
            I have learned that service is only available to non-U.S. persons
            and entities.
          </Text>
        </Checkbox>
      </Box>
    </Box>
  );
};

export default WarningCheckbox;
