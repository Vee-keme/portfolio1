import React from "react";
import "../styles/Workpage.css";
import { projectData } from "../projectsData";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import SingleProject from "../components/SingleProject";

export default function WorkPage() {
  console.log(projectData);
  return (
    <motion.div
      className="Workpage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section>
        <p>I like to build projects from time to time</p>
        <div className="projects">
          {/* start of project component */}
          {/* <div className="single-project">
            <h3 className="text-start my-6 text-4xl">Netflix Clone</h3>
            <div className="projects__container">
              <div className="projects--imageDiv">
                <img
                  src={project1}
                  alt="project image"
                  className="projects--image"
                />
              </div>

              <div className="projects--text">
                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt corporis modi adipisci unde distinctio assumenda
                    asperiores! Sapiente eum quibusdam dignissimos. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Deserunt
                    corporis modi adipisci unde distinctio assumenda asperiores!
                    Sapiente eum quibusdam dignissimos.
                  </p>
                </div>
                <button className="projects--text-button animate-pulse border rounded-lg px-4 py-2 mt-6">
                  Live Website
                  <span className="ml-4">→</span>
                </button>
              </div>
            </div>
          </div> */}

          <SingleProject />
        </div>
      </section>
    </motion.div>
  );
}
