import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: "30px",
  fontSize: "16px",
});

const border = defineStyle({
  borderTop: "0.5px solid",
  borderBottom: "2px solid",
});

const gradient = defineStyle({
  background: "linear-gradient(136deg, #5D07F9 0%, #05F0B0 98.79%)",
  _hover: {
    background: "linear-gradient(36deg, #5D07F9 0%, #05F0B0 98.79%)",
  },
  _active: {
    opacity: "1 !important",
  },
});

export const buttonThemes = defineStyleConfig({
  baseStyle,
  variants: { border, gradient },
});
