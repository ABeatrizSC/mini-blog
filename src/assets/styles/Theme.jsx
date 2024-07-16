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
    componentBackground: "#302e2e",
    loaderBackground: "#212121c1",
    primary: "#5b217c",
    primaryHover: "#522972",
    tagsBackground: "#5b217c3b",
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