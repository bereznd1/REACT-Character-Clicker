import React from "react";


//conditionally rendering BASICALLY IF-ELSE STATEMENT IN REACT
//if there is a "fluid" prop, then append "-fluid" (whats after the ?)
//if theres no "fluid" prop, then just append "" (whats after the :)
const Container = props => (
  <div className="container">
    {props.children}
  </div>
);

export default Container;
