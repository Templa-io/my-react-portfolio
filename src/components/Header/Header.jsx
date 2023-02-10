import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Bars from "../../assets/svg/bars.png";

import { motion } from "framer-motion";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <div className="logo-name">ZEPH</div>
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--orange)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
          >
            <Link to="work">My Work</Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
          >
            <Link to="/about"> About Me</Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <a href="https://link.medium.com/VD7l7xmo9wb" target="_blank">
              Blog
            </a>
          </motion.li>
        </ul>
      )}
    </div>
  );
};

export default Header;
