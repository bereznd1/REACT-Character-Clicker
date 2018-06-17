import React, { Component } from 'react';


// ---
import Container from "./components/Container";
//--
import Row from "./components/Row";
//--
import Col from "./components/Col";

// make a navbar later on
import Header from "./components/Header";

//-- FIGURE OUT WHY I CANT JUST IMPORT ENTIRE HERO FOLDER AS "./COMPONENTS/HERO"
import Hero from "./components/Hero/Hero";

import Main from "./components/Main/Main";
// import Card from "./components/Card";

//--
import Footer from "./components/Footer/Footer";


class App extends Component {


  // state = {
  //   result: {},
  //   search: ""
  // };

  // componentDidMount() {
  //   this.searchMovies("juice");
  // }

  // handleImgClick = event => {

  //       $(document).on("click", ".view-comments", function() {
  //       //Save the ID from that button
  //       var thisId = $(this).attr("data-id");

  //       });
  // };

  handleImgClick = event => {
    // Get the data-value of the clicked button
    const imageName = event.target.attributes.getNamedItem("data-value").value;

    console.log(imageName);

    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    //JUST A DIFF WAY TO SET STATE BY CLONING IT
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // // Replace our component's state with newState, load the next dog image
    // this.setState(newState);
    // this.loadNextDog();


  };




  render() {
    return (

      
      <Container>

        {/* Header */}
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>

        {/* Hero */}
        <Row>
          <Col size="md-12">
            <Hero>
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


            <Main handleImgClick={this.handleImgClick}/>
      
      
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
