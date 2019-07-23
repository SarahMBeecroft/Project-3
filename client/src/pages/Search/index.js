import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import ABV from '../../components/BeerABV';
import './style.css';

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
        <h1>Beer Style:</h1>
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
        <h1>Beer ABV % (Optional):</h1>
        <ABV
          suggestions={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9", 
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22"
          ]}
        />
      </Container>
    );
  }
}

export default SearchBeers;