import {
  Box,
  Button,
  IconButton,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import ArrowDown from "../Bridge/SwapCard/Assets/ArrowDown.jsx";

const PopoverChainSelector = ({ initialRef, valueSetter, availableList }) => {
  return (
    <>
      <Popover
        initialFocusRef={initialRef}
        placement={"bottom-end"}
        usePortal
        closeOnBlur={true}
      >
        {({ onClose }) => (
          <>
            <PopoverTrigger>
              <IconButton
                icon={<ArrowDown />}
                aria-label={"showChainModal"}
                variant={"unstyled"}
                _hover={{ opacity: "0.65" }}
                minWidth={"20px"}
                height={"20px"}
              />
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              borderRadius={"12px"}
              background={"rgba(3, 3, 3, 1)"}
              color={"white"}
              borderColor={"green.800"}
              width={"100%"}
              maxWidth={"550px"}
            >
              <PopoverBody padding={"0"}>
                {availableList.map((blockchain, index) => {
                  const isLast = index === availableList.length - 1;
                  const borderRadius = isLast
                    ? "0 0 12px 12px"
                    : index === 0
                      ? "12px 12px 0 0"
                      : "0";
                  // const isSelected = blockchain.name === currentValue.name;
                  return (
                    <Box
                      key={`${index}-${blockchain.name}`}
                      _hover={{ backgroundColor: "#05F0B0AA" }}
                      w={"100%"}
                      padding={"1px 8px"}
                      borderRadius={borderRadius}
                    >
                      <Button
                        variant={"unstyled"}
                        // isDisabled={isSelected}
                        onClick={() => {
                          valueSetter(blockchain);
                          onClose();
                        }}
                        // ref={initialRef}
                      >
                        <Box display={"flex"} gap={"12px"}>
                          <Image
                            src={blockchain.icon}
                            alt={blockchain.name}
                            width={"24px"}
                            height={"24px"}
                          />
                          <Text fontSize={"16px"}>{blockchain.name}</Text>
                        </Box>
                      </Button>
                    </Box>
                  );
                })}
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </>
  );
};

export default PopoverChainSelector;
