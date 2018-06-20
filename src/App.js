import React, { Component } from 'react';


// ---
import Container from "./components/Container";
//--
import Row from "./components/Row";
//--
import Col from "./components/Col";

// make a navbar later on
import Header from "./components/Header/Header";

//-- FIGURE OUT WHY I CANT JUST IMPORT ENTIRE HERO FOLDER AS "./COMPONENTS/HERO"
import Hero from "./components/Hero/Hero";

import Main from "./components/Main/Main";
// import Card from "./components/Card";

//--
import Footer from "./components/Footer/Footer";

import kramer from './img/kramer.jpg';
import estelle from './img/estelle.jpg';
import newman from './img/newman.jpg';
import helen from './img/helen.jpg';
import elaine from './img/elaine.jpg';
import morty from './img/morty.jpg';
import leo from './img/leo.jpg';
import jackie from './img/jackie.jpg';
import susan from './img/susan.jpg';
import george from './img/george.jpg';
import seinfeld from './img/seinfeld.jpg';
import frank from './img/frank.jpg';

import bg from './img/bg.jpg';



class App extends Component {


  state = {
    score: 0,
    topScore: 0,
    message: "",
    imgsClicked: [],
    images: [kramer, estelle, newman, helen, elaine, morty, leo, jackie, susan, george, seinfeld, frank]
  };


  reShuffle = array => {

    var shuffledArray = [];
    var len = array.length;
    while(len){
       shuffledArray.push(array.splice(Math.floor(Math.random()*array.length),1)[0]);
       len--;
    }
    this.setState({ images: shuffledArray });

  };




  handleImgClick = event => {
    // Get the src of the clicked button
    const imageName = event.target.attributes.getNamedItem("src").value;
    console.log(imageName);

    //Checking to see if the image you guessed has already been clicked
    const multiplesArray = this.state.imgsClicked.filter(function(img) { return img === imageName; });
    var multiples = multiplesArray.length;

    //If you guess the image for THE FIRST TIME (WIN)
    if (multiples === 0) {
      this.setState({ score: this.state.score + 1, message: "You guessed correctly!", imgsClicked: [...this.state.imgsClicked, imageName] });
      
      this.state.score >= this.state.topScore ? this.setState({ topScore: this.state.topScore + 1 }) : this.setState({ topScore: this.state.topScore });

    }

    //If you repeat a guess (LOSE)
    else if (multiples > 0) {
      this.setState({ score: 0, message: "You guessed incorrectly!", imgsClicked: [] });
    }


  
    //RESHUFFLING
    this.reShuffle(this.state.images);
    console.log(this.state);

  };




  render() {
    return (

      
      <Container>

        {/* Header */}
        <Row>
          <Col size="md-12">
            <Header score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
          </Col>
        </Row>

        {/* Hero */}
        <Row>
          <Col size="md-12">
            <Hero backgroundImage={bg}>
              <h1>Clicky Game!</h1>
              <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </Hero>
          </Col>
        </Row>

        {/* Main Image Section */}
        <Row>
          <Col size="md-2">
          </Col>

          <Col size="md-8">


            <Main handleImgClick={this.handleImgClick} images={this.state.images}/>
      
      
              </Col>

           <Col size="md-2">
           </Col>
        </Row>

     
         <Row>
          <Col size="md-12">
             <Footer />
           </Col>
        </Row>


        
       </Container>
       

    );
  }
}

export default App;
