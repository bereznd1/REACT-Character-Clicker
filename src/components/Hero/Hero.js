import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundColor: `#ffffff` }}>
    {props.children}
  </div>
);

export default Hero;
