import React from "react";
import theme from "../theme";
import { Box, ThemeProvider } from "@material-ui/core";
import Footer from "./footer";
import Hero from "./hero";
import NavBar from "./navbar";
import styled from "styled-components";
import "../global.css";
import "@fontsource/comic-mono";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: #093238;
  color: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 2vh;
  padding: 1.5rem;
  width: 80%;
  min-height: 50vh;

  @media (max-width: 768px) {
    width: 85%;
    padding: 0.5rem;
  }
`;

const Page = styled.div`
  font-family: "Sarabun";
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background: #031012;
  color: white;
  padding: 0px;
  margin: 0px;
  justify-content: space-around;
  min-height: 100vh;

  a:link {
    text-decoration: none;
    color: #cccccc;
  }

  a:visited {
    text-decoration: none;
    color: #cccccc;
  }

  a:hover {
    text-decoration: none;
    color: #cccccc;
  }

  a:active {
    text-decoration: none;
    color: #cccccc;
  }

  ul li {
    line-height: 175%;
  }
  table,
  th,
  td {
    border: 1px solid;
  }
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <NavBar />
        <Hero />
        <Body>{children}</Body>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}
