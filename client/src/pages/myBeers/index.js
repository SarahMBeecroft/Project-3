import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';

class MyBeers extends Component {
  // Creates state
  state = {
    beers: [],
    error: '',
    message: ''
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Hop to It</h1>
        </Jumbotron>
    
      </Container>
    );
  }
}

export default MyBeers;