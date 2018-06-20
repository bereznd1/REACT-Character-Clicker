//Imports REACT
import React, { Component } from "react";

//Imports all necessary components
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//Imports all necessary image files
import kramer from "./img/kramer.jpg";
import estelle from "./img/estelle.jpg";
import newman from "./img/newman.jpg";
import helen from "./img/helen.jpg";
import elaine from "./img/elaine.jpg";
import morty from "./img/morty.jpg";
import leo from "./img/leo.jpg";
import jackie from "./img/jackie.jpg";
import susan from "./img/susan.jpg";
import george from "./img/george.jpg";
import seinfeld from "./img/seinfeld.jpg";
import frank from "./img/frank.jpg";
import bg from "./img/bg.jpg";

//Extends the REACT Component to enable us to work with states
class App extends Component {
  //The initial state of the component.

  //The Score & Top Score to start off with are 0, and the Message just displays basic game instructions.
  //The imgsClicked array is initially empty, but will get filled after users start clicking images.
  //The Images array contains the imported image files from the img folder which will be used to populate the "src" attributes of the input elements in the Main component.
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    imgsClicked: [],
    images: [
      kramer,
      estelle,
      newman,
      helen,
      elaine,
      morty,
      leo,
      jackie,
      susan,
      george,
      seinfeld,
      frank
    ]
  };





  //Method for shuffling the images on the page in a random order.
  reShuffle = array => {
    var shuffledArray = [];
    var len = array.length;
    while (len) {
      shuffledArray.push(
        array.splice(Math.floor(Math.random() * array.length), 1)[0]
      );
      len--;
    }
    //Sets the images array in the state to be the newly shuffled array
    this.setState({ images: shuffledArray });
  };





  //Method for what to do after a user clicks an image
  handleImgClick = event => {
    //Get the src attribute of the clicked image
    const imageName = event.target.attributes.getNamedItem("src").value;

    //Check to see if the image the user guessed has already been clicked
    const multiplesArray = this.state.imgsClicked.filter(function(img) {
      return img === imageName;
    });
    var multiples = multiplesArray.length;

    //If user guesses the image for the first time...
    if (multiples === 0) {
      this.setState({
        //Add a point to the score, display Success message, add the clicked image to the imgsClicked array in the state
        score: this.state.score + 1,
        message: "You guessed correctly!",
        imgsClicked: [...this.state.imgsClicked, imageName]
      });

      //If the user's new score is greater than or equal to the Top Score, increase the Top Score by 1
      this.state.score >= this.state.topScore
        ? this.setState({ topScore: this.state.topScore + 1 })
        : this.setState({ topScore: this.state.topScore });
    }

    //If user repeats a guess...
    else if (multiples > 0) {
      //Reset score to 0, display Fail message, empty the imgsClicked array in the state so that it start getting refilled from scratch when a new game begins
      this.setState({
        score: 0,
        message: "You guessed incorrectly!",
        imgsClicked: []
      });
    }

    //Call the reShuffle method to shuffle the images' order
    this.reShuffle(this.state.images);
  };




  
  //Code to return...
  render() {
    return (
      <div>
        {/* Header, which takes in the current score, top score, and message, to be able to display it within the page */}
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        {/* Hero */}
        <Hero backgroundImage={bg}>
          <h1>Seinfeld Clicker!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </Hero>

        <Container>
          <Row>
            <Col size="md-2" />

            <Col size="md-8">
              {/* Main Image Section, which takes in the onClick method & the overall array of imported images, which will be referenced in the src attribute of each image input in the Main component. */}
              <Main
                handleImgClick={this.handleImgClick}
                images={this.state.images}
              />
            </Col>

            <Col size="md-2" />
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

//Exports the entire app
export default App;
