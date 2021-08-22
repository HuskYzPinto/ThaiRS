import React from "react";
import {
  Box,
  Menu,
  IconButton,
  Button,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { Link } from "gatsby";

interface Props {}
const StyledNav = styled.div`
  display: flex;
  background: #031012;
  width: 100%;
  height: 4vh;
  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const StyledNavButton = styled.button`
  color: white;
  font-family: "Comic Mono", "Waree";
  background-color: #062024;
  border-color: #0d1417;
  border-style: outset;
  border-width: 1px;
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  margin-top: 3px;
  &:hover {
    background-color: #0d4852;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const StyledIcon = styled(IconButton)`
  color: white;
`;
const DesktopWrapper = styled.div`
  display: block;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const HomeButton = styled.a`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const NavBar: React.FC<Props> = (props: Props) => {
  const Desktop = () => {
    return (
      <DesktopWrapper>
        <StyledNav>
          <HomeButton href="/">
            <StyledNavButton>หน้าหลัก</StyledNavButton>
          </HomeButton>
          <a href="/introduction">
            <StyledNavButton>แนะนำ RuneScape</StyledNavButton>
          </a>
          <a href="/membership">
            <StyledNavButton>ข้อมูลระบบสมาชิก</StyledNavButton>
          </a>
          <a href="/osrs-guide">
            <StyledNavButton>แนะนำผู้เล่นใหม่ OSRS</StyledNavButton>
          </a>
          <a href="/rs3-guide">
            <StyledNavButton>แนะนำผู้เล่นใหม่ RS3</StyledNavButton>
          </a>
          <a href="https://discord.rune.in.th/">
            <StyledNavButton>ดิสคอร์ด</StyledNavButton>
          </a>
        </StyledNav>
      </DesktopWrapper>
    );
  };

  const Mobile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <MobileWrapper>
        <StyledNav>
          <a href="/">
            <StyledIcon size="large">
              <HomeIcon />
            </StyledIcon>
          </a>

          <StyledIcon size="large" onClick={handleClick}>
            <MenuIcon />
          </StyledIcon>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem component="a" href="/introduction" onClick={handleClose}>
              {" "}
              แนะนำ RuneScape{" "}
            </MenuItem>
            <MenuItem component="a" href="/membership" onClick={handleClose}>
              {" "}
              ระบบสมาชิก
            </MenuItem>
            <MenuItem component="a" href="osrs-guide" onClick={handleClose}>
              {" "}
              แนะนำ OSRS
            </MenuItem>
            <MenuItem component="a" href="rs3-guide" onClick={handleClose}>
              {" "}
              แนะนำ RS3
            </MenuItem>
          </Menu>
        </StyledNav>
      </MobileWrapper>
    );
  };

  return (
    <Box>
      <Desktop />
      <Mobile />
    </Box>
  );
};

export default NavBar;
