import { useState } from "react";
import { Link } from "react-router-dom";
import { words } from "./utils/words";
import netflixClone from "../src/assets/project1.png";
import repoApp from "../src/assets/project2.png";
import lightsOut from "../src/assets/project3.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState("");
  const [showHome, setShowHome] = useState();
  const [showAbout, setShowAbout] = useState();
  const [showWork, setShowWork] = useState();
  const [showContact, setShowContact] = useState();

  //set navbar button to toggle
  const toggle = () => {
    setIsOpen(!isOpen);

    console.log(isOpen);
  };

  //display random words starting with V at the logo
  function displayRandomWord(wordArray) {
    let randomIndex;
    setTimeout(function () {
      randomIndex = Math.floor(Math.random() * wordArray.length);
      const vWord = wordArray[randomIndex];
      setWord(vWord);
    }, 10000);
  }

  // useEffect(() => {
  //   displayRandomWord(words);
  // }, [word]);

  displayRandomWord(words);

  return (
    <nav className="">
      <div className="Navbar">
        <div className="Navbar-title">
          <div className="nav-word">
            V{" "}
            <span className="line">
              {/* {word ? `${word}` : "null"} */}
              elia
            </span>
          </div>
        </div>

        <div className="Navbar-menu" onClick={toggle}>
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>

      <div
        // className="nav-links"
        className={`nav-links ${isOpen ? "open" : ""}`}
        style={{
          display: isOpen ? "block" : "none",
          // left: !isOpen ? -500 : 0,
          // transform: "left 1s linear",
        }}
        onClick={toggle}
      >
        {/* console.log() */}
        <ul>
          <li data-text="home">
            <Link
              to="/"
              onMouseEnter={() => {
                setWord("Home");
                setShowHome(true);
              }}
              onMouseLeave={() => {
                setWord("");
                setShowHome(false);
              }}
            >
              Home
            </Link>
          </li>
          <li data-text="about">
            <Link
              to="/about"
              onMouseEnter={() => {
                setWord("About");
                setShowAbout(true);
              }}
              onMouseLeave={() => {
                setWord("");
                setShowAbout(false);
              }}
            >
              About
            </Link>
          </li>
          <li data-text="work">
            <Link
              to="/work"
              onMouseEnter={() => {
                setWord("Work");
                setShowWork(true);
              }}
              onMouseLeave={() => {
                setWord("");
                setShowWork(false);
              }}
            >
              Work
            </Link>
          </li>
          <li data-text="contact">
            <Link
              to="/contact"
              onMouseEnter={() => {
                setWord("Contact");
                setShowContact(true);
              }}
              onMouseLeave={() => {
                setWord("");
                setShowContact(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* {showHome && ( */}
      <div>
        <img
          // className="extraImage"
          // className={`extraImage ${showHome ? "show" : "none"}`}
          className={`extraImage ${
            showHome
              ? "show"
              : showAbout
              ? "show"
              : showWork
              ? "show"
              : showContact
              ? "show"
              : "none"
          }`}
          src={
            showHome
              ? netflixClone
              : showAbout
              ? netflixClone
              : showWork
              ? netflixClone
              : showContact
              ? netflixClone
              : ""
          }
          alt=""
        />
      </div>
      {/* )} */}
    </nav>
  );
}
