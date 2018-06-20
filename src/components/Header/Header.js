import React from "react";

import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

import "./Header.css";

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
          <span
            className={`${
              props.message === "You guessed correctly!" ||
              props.message === "Click an image to begin!"
                ? "success"
                : "fail"
            }`}
          >
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

export default Header;
