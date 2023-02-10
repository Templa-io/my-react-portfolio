import React, { useState } from "react";
import Header from "../Header/Header";
import "./Hero.css";

import chip from "../../assets/chip.png";
import arrow from "../../assets/right-arrow.png";
import microchip from "../../assets/microchip.png";
import image from "../../assets/t-image2.jpg";
import arrows from "../../assets/down-arrow.png";

import { motion } from "framer-motion";

import {
  faBehance,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticlesComponent from "../../subComponents/ParticlesComponent";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme, lightTheme } from "../Themes";

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? lightTheme.text : lightTheme.body};
`;

const Hero = (props) => {
  const transition = { type: "spring", duration: 4 };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <hr />
        {/*realiable add*/}
        <div className="reliable-add">
          <div className="first-div">
            <span>The</span>
            <span> Most</span>
          </div>

          <span>Reliable Partner</span>
        </div>
        <div className="our-work">
          <span>Our work is characterized by high accuracy</span>
          <span>in the minimum time.</span>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <motion.buttons
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            className="btn"
          >
            <a href="https://www.linkedin.com/in/zephaniah/" target="_blank">
              About me
            </a>
          </motion.buttons>

          <Link to="/skills">
            <motion.buttons
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
            >
              CV
              <img src={arrow} className="arrow" alt="" />
            </motion.buttons>
          </Link>
        </div>
        {/*boost and build */}
        <div className="boost-build">
          <motion.div
            className="chip"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >
            <motion.img
              src={chip}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
            />
            <span>
              Boost your development team with Websyco. We inspire business to
              bring ideas to life.
            </span>
          </motion.div>
          <motion.div
            className="microchip"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >
            <motion.img
              src={microchip}
              alt=""
              className="microchip"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
            />
            <span>
              Build your idea with us. Free up your team's time with our support
              and security service.
            </span>
          </motion.div>
        </div>
      </div>
      <div className="right-h">
        <div className="socials">
          {/* <motion.a
            href=""
            target="_blank"
            className="twitter"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </motion.a> */}
          <motion.a
            href="https://github.com/SefuZeph"
            target="_blank"
            className="github"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
          <motion.a
            href="https://www.behance.net/zephaniahsefuoduori"
            className="behance"
            target="_blank"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faBehance} size="2x" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/zephaniah/"
            target="_blank"
            className="linkedin"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
          <Line
            color={props.theme}
            initial={{
              height: 0,
            }}
            animate={{
              height: "8rem",
            }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.8,
            }}
          />
        </div>

        <div className="dpic">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
          ></motion.div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={image}
            alt=""
          />

          {/* <motion.div
            className="arrows"
            span={true}
            smooth={true}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={arrows} alt=""></img>
            <span>Skills</span>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
