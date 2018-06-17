import React from "react";
import Container from "../Container";
import Row from "../Row";
//--
import Col from "../Col";
// import Header from "../Header";
// import Card from "../Card";
// import "../styles/Header.css";


const Main = props => (

<Container>

<Row>
    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/kramer.jpg`)} data-value="kramer" alt="kramer"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/estelle.jpg`)} data-value="estelle" alt="estelle"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/newman.jpg`)} data-value="newman" alt="newman"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/helen.jpg`)} data-value="helen" alt="helen"/>
    </Col>
</Row>

<Row>
    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/elaine.jpg`)} data-value="elaine" alt="elaine" />
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/morty.jpg`)} data-value="morty" alt="morty"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/leo.jpg`)} data-value="leo" alt="leo"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/jackie.jpg`)} data-value="jackie" alt="jackie"/>
    </Col>
</Row>

<Row>
    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/susan.jpg`)} data-value="susan" alt="susan"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/george.jpg`)} data-value="george" alt="george"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/seinfeld.jpg`)} data-value="seinfeld" alt="seinfeld"/>
    </Col>

    <Col size="md-3">
    <input type="image" onClick={props.handleImgClick} src={require(`../../img/frank.jpg`)} data-value="frank" alt="frank"/>
    </Col>
</Row>

</Container>

);

export default Main;