import { useState } from "react";
import { Link } from "react-router-dom";
import { words } from "./utils/words";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState("");
  // const navId = document.getElementById("NavItems");
  const navId = document.getElementsByClassName("nav-links");

  // const navLinks1 = navLinks;
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
    <>
      <div className="Navbar">
        <div className="Navbar-title">
          <h1>
            V <span>{word ? `${word}` : "null"}</span>
          </h1>
        </div>

        <nav className="Navbar-menu" onClick={toggle}>
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </nav>
      </div>

      <div
        className="nav-links"
        style={{
          display: isOpen ? "block" : "none",
        }}
        onClick={toggle}
      >
        <ul>
          <li data-text="home">
            <Link to="/">Home</Link>
          </li>
          <li data-text="about">
            <Link to="/about">About</Link>
          </li>
          {/* <li data-text="work">
            <Link to="/work">Work</Link>
          </li>
          <li data-text="contact">
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
