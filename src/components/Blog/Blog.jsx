import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styled, { ThemeProvider } from "styled-components";
import ParticlesComponent from "../../subComponents/ParticlesComponent";
import { Design, Develope } from "../AllSvgs";
import BigTitlte from "../../subComponents/BigTitlte";
// import particles from "./utils.js/particles";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid;
  color: white;
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Blog = () => {
  return (
    <Box>
      <ParticlesComponent />
      <Main>
        <Title>
          <Design width={40} height={40} /> Designer
        </Title>
        <Description>
          I love to create design which speaks, Keep it clean, minimal and
          simple.
        </Description>
        <Description>
          <strong>I like to Design</strong>
          <ul>
            <li>Web Design</li>
            <li>Mobile Apps</li>
          </ul>
        </Description>
        <Description>
          <strong>Tools</strong>
          <ul>
            <li>Figma</li>
          </ul>
        </Description>
      </Main>
      <Main>
        <Title>
          <Develope width={40} height={40} /> Frontend Developer
        </Title>
        <Description>
          I value business or brand for which i'm creating, thus i enjoy
          bringing new ideas to life.
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>
            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
            etc.
          </p>
        </Description>
        <Description>
          <strong>Tools</strong>
          <p>VScode, Github, Codepen etc.</p>
        </Description>
      </Main>
      <BigTitlte text="SKILLS" top="70%" right="30%" />
    </Box>
  );
};

export default Blog;
