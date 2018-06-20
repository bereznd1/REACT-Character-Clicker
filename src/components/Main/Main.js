import React from "react";
import Container from "../Container";
import Row from "../Row";
//--
import Col from "../Col";
// import Header from "../Header";
// import Card from "../Card";
import "./main.css";


const Main = props => (

<Container>

<Row>
    <Col size="md-3">
    <input type="image" className="img-thumbnail" onClick={props.handleImgClick} src={props.images[0]} alt={props.images[0]}/>
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[1]} alt={props.images[1]}  />
    </Col>

    <Col size="md-3"> 
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[2]} alt={props.images[2]} />
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[3]} alt={props.images[3]}  />
    </Col>
</Row>

<Row>
    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[4]} alt={props.images[4]}  />
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[5]} alt={props.images[5]} />
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[6]} alt={props.images[6]} />
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[7]} alt={props.images[7]} />
    </Col>
</Row>

<Row>
    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[8]} alt={props.images[8]} />
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[9]} alt={props.images[9]}/>
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[10]} alt={props.images[10]}/>
    </Col>

    <Col size="md-3">
    <input type="image" className="img-thumbnail"  onClick={props.handleImgClick} src={props.images[11]} alt={props.images[11]}/>
    </Col>
</Row>

</Container>

);

export default Main;