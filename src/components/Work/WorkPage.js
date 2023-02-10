import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../../components/Themes";
import { motion } from "framer-motion";

import LogoComponent from "../../subComponents/LogoComponent";
import SocialIcons from "../../subComponents/SocialIcons";
// import PowerButton from "../../subComponents/Button";

import { Work } from "../../data/WorkData";
import Card from "../../subComponents/Card";
import { YinYang } from "../../components/AllSvgs";
import BigTitlte from "../../subComponents/BigTitlte";
import Button from "../../subComponents/Button";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  background-color: var(--planCard);

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = (props) => {
  const ref = useRef(null);

  // useEffect(() => {
  //   let element = ref.current;

  //   const rotate = () => {
  //     element.style.transform = `translateX(${-window.pageYOffset}px)`;
  //   };

  //   window.addEventListener("scroll", rotate);
  //   return () => {
  //     window.removeEventListener("scroll", rotate);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent
          theme="dark
"
        />

        <SocialIcons theme />

        <Main variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <div style={{ overflowX: "scroll", width: "100%", height: "40vh" }}>
              <Card key={d.id} data={d} />
            </div>
          ))}
        </Main>

        <BigTitlte text="WORK" top="-8%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
