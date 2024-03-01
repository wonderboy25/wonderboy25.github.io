import {
  Button,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { toast } from "react-toastify";
import { menuData } from "./menuData";
import { useStateStore } from "../../store/stateStore.js";
import { useBlockchainStore } from "../../store/blockchainStore.js";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const MenuComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");
  const uniSatStatus = useStateStore((state) => state.unisatInstalled);
  const uniSatAddress = useStateStore((state) => state.uniSatAddress);
  const setUniSatAddress = useStateStore((state) => state.setUniSatAddress);
  const selectedFrom = useBlockchainStore((state) => state.blockchainFrom);
  const selectedTo = useBlockchainStore((state) => state.blockchainTo);
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();



  const unisatHandler = async () => {
    try {
      const accounts = await window.unisat.requestAccounts();
      if (accounts[0].substring(0, 3) === "bc1") { //"tb1" for testnet
        setUniSatAddress(accounts[0]);
      } else {
        toast.error("Please Connect to Native Segwit or Taproot Address starts with bc1...");
      }
    } catch (e) {
      setUniSatAddress("");
      toast.error("Something went wrong while connecting to wallet, please try again later");
    }
  };

  const switchUnisatNetwork = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      let res = await window?.unisat?.switchNetwork("livenet"); //testnet for testnet
      await unisatHandler();
    } catch (e) {
      toast.error(e?.message);
    }
  };

  const handleUnisatButton = async () => {
    // if (uniSatStatus && !uniSatAddress) {
    //   const result = await window.unisat.requestAccounts();
    //   setUniSatAddress(result[0]);
    // } else if (uniSatStatus) {
    //   setUniSatAddress("");
    // } else {
    //   window.open("https://unisat.io/download", "_blank");
    // }
    if (window.unisat) {
      try {
        const res = await window.unisat.getNetwork();
        if (res === "livenet") {
          await unisatHandler();
        } else {
          await switchUnisatNetwork();
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      window.open("https://unisat.io/download", "_blank");
    }
  };

  const handleEthereumButton = async () => {
    if (window.ethereum) {
      if (isConnected) {
        disconnect();
      } else {
        connect({ connector: connectors[0] });
      }
    } else {
      window.open("https://metamask.io/", "_blank");
    }
  };

  useEffect(() => {
    if (window.unisat) {
      window.unisat.on("accountsChanged",unisatHandler);

      return () => {
        window.unisat.removeListener("accountsChanged", unisatHandler);
      };
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (window.unisat) {
        let res = await window.unisat.getAccounts();
        // console.log(res)
        if(res?.length) await handleUnisatButton();
      }
    })();
  }, []);

  const beautify = (_addr) => {
    return _addr?.slice(0, 6) + "...." + _addr?.slice(-4);
  };

  if (isMobile)
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Image src="/assets/menu.svg" h={"100%"} w={"100%"} />}
        />
        <MenuList
          bgColor={"#141518"}
          border={"#141518"}
          w={"100px"}
          borderRadius={"16px"}
          py={0}
        >
          {menuData.map(({ name, href }, index) => (
            <MenuItem
              key={index}
              as={Link}
              href={href}
              style={{ textDecoration: "none" }}
              backgroundColor={"transparent"}
              fontSize={"14px"}
              _hover={{
                backgroundColor:
                  " var(--white-alpha-50, rgba(255, 255, 255, 0.04))",
                borderRadius: "16px",
                textDecoration: "none",
              }}
            >
              {name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );

  return (
    <>
      <HStack spacing={"8"} as={"nav"} fontSize={"18px"} ml={"20px"}>
        {menuData.map(({ name, href, enabled }, index) => (
          <Tooltip
            label={"Coming soon"}
            hasArrow={true}
            placement={"bottom"}
            isDisabled={enabled}
            key={index}
          >
            <Link href={href} style={{ textDecoration: "none" }}>
              {name}
            </Link>
          </Tooltip>
        ))}
      </HStack>
      <HStack spacing={"1"} >
      {selectedFrom.chainId === 0 ? (
        <Button
          variant={"border"}
          borderColor={"#5D07F9"}
          height={"48px"}
          onClick={async () => await handleUnisatButton()}
        >
          {uniSatStatus
            ? uniSatAddress
              ? beautify(uniSatAddress)
              : "Connect UniSat"
            : "Install UniSat"}
        </Button>
      ): (
        <Button
          variant={"border"}
          borderColor={"#5D07F9"}
          height={"48px"}
          onClick={async () => await handleEthereumButton()}
        >
          {isConnected ? beautify(address) : "Connect Wallet"}
        </Button>
      )}
      <AiOutlineArrowRight color="#FFFFFF" className="mt-[14px]" />
      {selectedTo.chainId === 0 ? (
        <Button
          variant={"border"}
          borderColor={"#5D07F9"}
          height={"48px"}
          onClick={async () => await handleUnisatButton()}
        >
          {uniSatStatus
            ? uniSatAddress
              ? beautify(uniSatAddress)
              : "Connect UniSat"
            : "Install UniSat"}
        </Button>
      ) : (
        <>
          <Button
            variant={"border"}
            borderColor={"#5D07F9"}
            height={"48px"}
            onClick={async () => await handleEthereumButton()}
          >
            {isConnected ? beautify(address) : "Connect Wallet"}
          </Button>
        </>
      )}


      </HStack>
    </>
  );
};
export default MenuComponent;
