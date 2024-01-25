import React, { useRef } from "react";
import "../styles/Aboutpage.css";
import { motion } from "framer-motion";
import preciousImage from "../assets/DSC_6212vee.jpg";
// import { useScroll, useTransform } from "framer-motion";
// import { useScroll, useTransform } from "framer-motion";

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
            <h1>
              Hello, I am Velia Precious a seasoned developer and proficient
              technical writer.
            </h1>
          </motion.div>

          {/* JUST USE ONSCROLL ANIMATIONS AND LATER FIX THE H1 INTO AN HORIZONTAL SCROLL POSITION ON SCROLL */}
          <h4 className="expertise">
            My expertise lies at the intersection of coding and crafting
            articulate documentation, with a remarkable 80% of my time dedicated
            to coding, while the remaining 20% is devoted to honing concise and
            intelligible technical materials.
          </h4>
          <h4 className="drive">
            Drawing immense inspiration from the captivating realm of anime, I
            infuse creativity and imagination into my coding and writing
            pursuits. My ultimate objective is to engineer code that not only
            operates with utmost efficiency but is also effortlessly
            comprehensible and maintainable.
          </h4>
          <h4>
            Be it tackling intricate algorithms or composing user manuals, I
            ardently strive to deliver exceptional work of premium quality,
            meticulously tailored to cater to the diverse requirements of both
            end-users and fellow developers.
          </h4>
          <p>Here are some technologies I have been working with:</p>
        </div>
      </motion.main>
    </motion.div>
  );
}
