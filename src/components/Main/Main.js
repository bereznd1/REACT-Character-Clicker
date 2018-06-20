//Imports REACT
import React from "react";

//Imports our custom Bootstrap-based components
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

//Imports CSS file for styling
import "./main.css";

//Code for the main section of the page, which displays the images
const Main = props => (
  // Each image is inserted as an Image Input element, so that it will be able to register click events using "event.target".

  // It takes in the "hangleImgClick" prop, which references a method in the "App.js" file that contains the logic for what should happen after a user clicks an image.

  // The "src" attribute of each image corresponds to an item in the Image array in the "App.js" file, which is continuously shuffled after each user click, so that the images are always displayed in different order.

  <Container>
    <Row>
      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[0]}
          alt={props.images[0]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[1]}
          alt={props.images[1]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[2]}
          alt={props.images[2]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[3]}
          alt={props.images[3]}
        />
      </Col>
    </Row>

    <Row>
      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[4]}
          alt={props.images[4]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[5]}
          alt={props.images[5]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[6]}
          alt={props.images[6]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[7]}
          alt={props.images[7]}
        />
      </Col>
    </Row>

    <Row>
      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[8]}
          alt={props.images[8]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[9]}
          alt={props.images[9]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[10]}
          alt={props.images[10]}
        />
      </Col>

      <Col size="md-3">
        <input
          type="image"
          className="img-thumbnail"
          onClick={props.handleImgClick}
          src={props.images[11]}
          alt={props.images[11]}
        />
      </Col>
    </Row>
  </Container>
);

//Exports the main section
export default Main;
