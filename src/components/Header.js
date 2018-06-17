import React from "react";
// import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header">
    <span>Clicky Game</span>
    <span id="alert"></span>
    <span id="score"></span>
  </header>
);

export default Header;
