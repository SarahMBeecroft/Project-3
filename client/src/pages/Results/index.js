import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
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
            
          </div>
        </div>
    
      </Container>
    );
  }
}

export default BeerResults;