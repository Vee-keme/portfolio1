import React from "react";
import { projectData } from "../projectsData";
import "../styles/Workpage.css"; // Ensure you import the correct stylesheet

const SingleProject = () => {
  return (
    <div className="single-project">
      {projectData.map((item, index) => {
        // Determine whether to reverse the layout
        const isReversed = index % 2 !== 0;

        return (
          <div key={index} className="project">
            <h3 className="text-start my-6 text-4xl">{item?.title}</h3>
            <div
              className={`projects__container ${
                isReversed ? "reverse-layout" : ""
              }`}
            >
              {/* Conditionally render the image and text */}
              {isReversed ? (
                <>
                  <div className="projects--text">
                    <div>
                      <p>{item?.details}</p>
                      <p className="text-sm italic">{item?.Language}</p>
                    </div>
                    <button className="projects--text-button animate-pulse border rounded-lg px-4 py-2 mt-6">
                      Live Website
                      <span className="ml-4">→</span>
                    </button>
                  </div>
                  <div className="projects--imageDiv">
                    <img
                      src={item?.image}
                      alt="project image"
                      className="projects--image"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="projects--imageDiv">
                    <img
                      src={item?.image}
                      alt="project image"
                      className="projects--image"
                    />
                  </div>
                  <div className="projects--text">
                    <div>
                      <p>{item?.details}</p>
                      <p className="text-sm italic">{item?.Language}</p>
                    </div>
                    <button className="projects--text-button animate-pulse border rounded-lg px-4 py-2 mt-6">
                      Live Website
                      <span className="ml-4">→</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProject;
