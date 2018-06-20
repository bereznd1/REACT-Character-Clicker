//Imports REACT
import React from "react";

//Imports our custom Bootstrap-based components
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

//Imports the CSS file to style the header
import "./Header.css";

//Header code
const Header = props => (
  <header className="header">
    <Container>
      <Row>
        <Col size="md-4">
          <span>
            <a className="link" href="/">
              Clicky Game
            </a>
          </span>
        </Col>

        <Col size="md-4">
          {/*Conditional statement that looks at the value of the "message" prop, and based on that, determines which class to assign to the span. Used for styling the span in the CSS.*/}
          <span
            className={`${
              props.message === "You guessed correctly!" ||
              props.message === "Click an image to begin!"
                ? "success"
                : "fail"
            }`}
          >
          {/*Will either display a "Correct" or "Incorrect" message, depending on how the user guesses*/}
            {props.message}
          </span>
        </Col>

        <Col size="md-4">
          <span>
            Your Score: {props.score} | Top Score: {props.topScore}
          </span>
        </Col>
      </Row>
    </Container>
  </header>
);

//Exports the Header
export default Header;
