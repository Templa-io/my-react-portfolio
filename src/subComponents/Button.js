import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  background-color: black;
  color: white;
  padding: 1em;
  border-radius: 5px;
  border: none;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
