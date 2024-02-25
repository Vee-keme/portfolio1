import React from "react";
import project1 from "../assets/project1.png";
// import "../styles/Workpage.css";

const SingleProject = () => {
  return (
    <div className="single-project">
      <h3 className="text-start my-6 text-4xl">Netflix Clone</h3>
      <div className="projects__container">
        <div className="projects--imageDiv">
          <img src={project1} alt="project image" className="projects--image" />
        </div>

        <div className="projects--text">
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              corporis modi adipisci unde distinctio assumenda asperiores!
              Sapiente eum quibusdam dignissimos. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Deserunt corporis modi adipisci unde
              distinctio assumenda asperiores! Sapiente eum quibusdam
              dignissimos.
            </p>
          </div>
          <button className="projects--text-button animate-pulse border rounded-lg px-4 py-2 mt-6">
            Live Website
            <span className="ml-4">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
