import "./App.css";
import React, { useEffect, useState } from "react";
// import HomePage from "./pages/HomePage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import WorkPage from "./pages/WorkPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);
  const [outerCursorX, setOuterCursorX] = useState(null);
  const [outerCursorY, setOuterCursorY] = useState(null);
  // const [] = useState()
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setOuterCursorX(e.clientX);
      setOuterCursorY(e.clientY);
    });
  });

  let cursor = document.querySelector(".cursor");
  let outerCursor = document.querySelector(".outerCursor");

  // document.addEventListener("mousemove", moveCursor);
  // function moveCursor(e) {
  //   let x = e.clientX;
  //   let y = e.clientY;

  //   cursor.style.left = `${x}px`;
  //   cursor.style.top = `${y}px`;
  //   outerCursor.style.left = `${x}px`;
  //   outerCursor.style.top = `${y}px`;
  // }

  let links = document.querySelectorAll("a");
  // console.log(links);

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
    });
  });

  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />

      <div
        className="cursor"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      ></div>
      <div
        className="outerCursor"
        style={{
          left: outerCursorX,
          top: outerCursorY,
        }}
      ></div>
    </div>
  );
}

export default App;
