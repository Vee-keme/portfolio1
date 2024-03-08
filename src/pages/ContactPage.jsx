import React from "react";
import "../styles/Contactpage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaJs } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaHashno,
} from "react-icons/fa";

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

        <div>
          <div>Send me a mail</div>

          <div>Reach me on Whatsapp</div>
        </div>
        <div>
          <div>
            <a href=""> Download my Resume</a>
          </div>

          <section>
            <div>
              <Link to="#">
                <FaGithub />
              </Link>
              <Link to="#">
                <FaGithub />
              </Link>
              <Link to="#">
                <FaGithub />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  );
}
