import React from "react";
// import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = props => (
  <header className="header">
    <span>Clicky Game</span>
    <span id="alert">{props.alert}</span>
    <span id="score">Your Score: {props.score} | Top Score: {props.topScore}</span>
  </header>
);

export default Header;
