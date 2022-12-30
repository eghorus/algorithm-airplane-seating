import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: baseTheme.colors.green,
  },
});

export default theme;
