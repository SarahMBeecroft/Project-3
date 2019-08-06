import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import Wrapper from '../../components/Wrapper';
import { Container, Row, Col } from '../../components/Grid';

class BeerResults extends Component {

  // Creates state
  state = {
    beers: [],
    error: '',
    message: ''
  };

  render() {
    return (
      <Container fluid>
      <div className="row">
        <div className="col s6">
          <h2>Your Results:</h2>
          <div className="resultsDiv"></div>
        </div>
      </div>
    </Container>
    );
  }
}

export default BeerResults;