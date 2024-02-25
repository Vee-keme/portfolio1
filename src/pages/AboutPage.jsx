import React, { useRef } from "react";
import "../styles/Aboutpage.css";
import { motion } from "framer-motion";
import preciousImage from "../assets/DSC_6212vee.jpg";
// import { useScroll, useTransform } from "framer-motion";
// import { useScroll, useTransform } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const iconsList = [
  {
    icon: <FaReact />,
    link: "",
  },
  {
    icon: <FaVuejs />,
    link: "",
  },
  {
    icon: <FaGit />,
    link: "",
  },
  {
    icon: <FaJs />,
    link: "",
  },

  {
    icon: <FaNode />,
    link: "",
  },
  {
    icon: <FaNode />,
    link: "",
  },
  {
    icon: <FaNode />,
    link: "",
  },
  {
    icon: <FaNode />,
    link: "",
  },
];

export default function AboutPage() {
  //get borders to show if possible
  const onMouseMoveCaptureHandler = (e) => {
    e.preventDefault();
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.right;
  };
  return (
    <motion.div
      className="Aboutpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.05 } }}
    >
      <motion.main className="aboutContainer">
        <div className="aboutContainer-imageDiv">
          <img
            src={preciousImage}
            alt="about-image"
            className="aboutContainer-image"
            onMouseMoveCapture={onMouseMoveCaptureHandler}
          />
        </div>
        <div className="aboutContainer-text">
          <motion.div
            className="headerdiv"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              Hello, I am Velia Precious a seasoned developer and proficient
              technical writer.
            </p>
          </motion.div>

          {/* JUST USE ONSCROLL ANIMATIONS AND LATER FIX THE H1 INTO AN HORIZONTAL SCROLL POSITION ON SCROLL */}
          <p className="expertise">
            My expertise lies at the intersection of coding and crafting
            articulate documentation, with a remarkable 80% of my time dedicated
            to coding, while the remaining 20% is devoted to honing concise and
            intelligible technical materials.
          </p>
          {/* <p className="drive">
            Drawing immense inspiration from the captivating realm of anime, I
            infuse creativity and imagination into my coding and writing
            pursuits. My ultimate objective is to engineer code that not only
            operates with utmost efficiency but is also effortlessly
            comprehensible and maintainable.
          </p> */}
          <p>
            Be it tackling intricate algorithms or composing user manuals, I
            ardently strive to deliver exceptional work of premium quality,
            meticulously tailored to cater to the diverse requirements of both
            end-users and fellow developers.
          </p>
          <p>Here are some technologies I have been working with:</p>

          <div className="icons-div">
            <div className="about-iconsContainer">
              {iconsList.map((item, index) => (
                <span className="aboutIcons">{item.icon}</span>
              ))}
            </div>
          </div>

          <div>
            <p>
              I am currently learning Japanese and a Mechanical Engineering
              student. I like to watch anime and read books in my free time
            </p>
          </div>

          <div>
            <p>Reach out to me:</p>
            <button>Check out my work →</button>
          </div>
        </div>
      </motion.main>
    </motion.div>
  );
}
