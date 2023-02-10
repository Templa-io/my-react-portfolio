import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  display: flex;

  align-items: center;
`;
const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 1em;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-size: 16px;
  cursor: pointer;
  position: fixed;
  left: 35rem;
  top: 2.5rem;
`;

const Logo = styled.h1`
  display: flex;
  position: fixed;
  left: 2rem;
  top: 2rem;
  color: white;
  z-index: 3;
`;
const HomeButton = ({ children }) => {
  return (
    <NavLink to="/">
      <StyledButton>{children || "Home"}</StyledButton>
    </NavLink>
  );
};
const LogoComponent = () => {
  return (
    <Box>
      <Logo>ZEPH</Logo>
      <HomeButton />
    </Box>
  );
};

export default LogoComponent;
