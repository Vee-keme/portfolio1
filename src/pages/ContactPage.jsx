import React from "react";
import "../styles/Contactpage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDownload, FaJs } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import resume from "../assets/resume.pdf";

export default function ContactPage() {
  return (
    <motion.div
      className="Contactpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section>
        <h2>Contact Me</h2>
        <h3>
          Reach out to me if you want a frontend developer or you find my
          projects interesting and want to talk about them or simply want to
          connect.
        </h3>

        <div className="Contactpage-socials">
          <div className="Contactpage-socials__text1">
            <div>
              <FaEnvelope className="Contactpage-socials__text1-icon" />
              <p>Send me a mail</p>
            </div>

            <div>
              <FaWhatsapp className="Contactpage-socials__text1-icon" />
              <p>Reach me on Whatsapp</p>
            </div>
          </div>

          <div className="Contactpage-socials__text2">
            <FaDownload className="Contactpage-socials__text2-icon" />
            <a
              href={resume}
              download={resume}
              className="Contactpage-socials__text2-text"
            >
              {" "}
              Download my Resume
            </a>
          </div>

          <div className="Contactpage-socials__icons">
            <Link to="#">
              <FaGithub />
            </Link>
            <Link to="#">
              <FaTwitter />
            </Link>
            <Link to="#">
              <FaLinkedin />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
