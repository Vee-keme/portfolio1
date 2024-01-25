import React from "react";
import "../styles/Workpage.css";
import { projectData } from "../projectsData";
import { motion } from "framer-motion";

export default function WorkPage() {
  console.log(projectData);
  return (
    <motion.div
      className="Workpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>Work page</h1>
    </motion.div>
  );
}
