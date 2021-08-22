import React from "react";
import theme from "../theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <Box>{children}</Box>
      <Footer />
    </ThemeProvider>
  );
}
