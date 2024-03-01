import { extendTheme } from "@chakra-ui/react";
import { buttonThemes } from "./themes/buttonThemes";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#222", "#222")(props),
      color: mode("#F8F8F8", "#F8F8F8")(props),
    },
  }),
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    green: "#05F0B0",
    purple: "#5D07F9",
  },
};

const components = {
  Button: buttonThemes,
};

const breakpoints = {
  md: "50em", // 800px
};

const fonts = {
  heading: `poppins, sans-serif`,
  body: `poppins , sans-serif`,
};

export const theme = extendTheme({
  colors,
  components,
  styles,
  breakpoints,
  fonts,
});
