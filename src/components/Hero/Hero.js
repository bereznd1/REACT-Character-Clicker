//Imports REACT
import React from "react";

//Imports the CSS file for styling
import "./Hero.css";

//Hero code (basically a picture that spans the width of the whole page, and has text on it)
const Hero = props => (
  <div
    className="hero text-center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>
);

//Exports Hero
export default Hero;
