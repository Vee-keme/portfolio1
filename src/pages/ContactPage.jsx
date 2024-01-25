import React from "react";
import "../styles/Contactpage.css";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="Contactpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>Contact Page</h1>
    </motion.div>
  );
}
