import React from "react";

import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#0C0D0F",
    red: "#cc2828",
    redHover: "#991E1E",
    text: "#FAFAFA",
    blackBackground: "#212121",
    primary: "#5b217c",
    primaryHover: "#522972",
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"].join(","),
  },
  fontSize: {

  }
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}