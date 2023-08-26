import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import handwave from "../assets/handwave.png";
import homeImg from "../assets/ss.png";
function Home() {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section className="home1">
        <div>
          <motion.h1 {...animations.h1}>
            Front-End Developer{" "}
            <img className="handWave" src={handwave} alt="" />
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                `Hi, I'm Devesh`,
                "  A passionate Front-End-React Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 2,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="https://github.com/Ceh-devesh" rel="noreferrer" target="_blank">
              <button className="ui-btn">
                <span>GITHUB</span>
              </button>
            </a>
            <a href="mailto:Ceh.devesh95@gmail.com">
              <button className="ui-btn">
                <span>E-MAIL</span>
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="home-img" alt='homepng' >
        <img src={homeImg} alt="homeimg" />

      </section>
      <BsChevronDown />
    </div>
  );
}

export default Home;
