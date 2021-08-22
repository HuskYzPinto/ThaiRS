import React from "react";

import { Box } from "@material-ui/core";

import styled from "styled-components";

interface Props {}

const FooterContainer = styled.footer`
  font-family: "Sarabun";
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: #031012;
  color: white;
  margin: 0px;
  justify-content: space-around;
`;

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <Box>
      <FooterContainer>
        <div>Made by Huskiez 2021 ©</div>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
