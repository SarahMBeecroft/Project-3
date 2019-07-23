import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import ABV from '../../components/BeerABV';

class SearchBeers extends Component {
  // Creates state
  state = {
    search: '',
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
        <Style
          suggestions={[
            "IPA",
            "Pale Ale",
            "Hefeweizen",
            "Stout",
            "Sour",
            "Lager", 
            "Amber"
          ]}
        />
        <ABV></ABV>
      </Container>
    );
  }
}

export default SearchBeers;