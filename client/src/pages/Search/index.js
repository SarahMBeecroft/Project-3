import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import API from '../../utils/API';
import './style.css';

// Currently set up to use test search field component
class SearchBeers extends Component {
  // Creates state
  state = {
    search: '',
    beers: [],
    error: '',
    message: ''
  };

  // Takes value from search input 
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading 
    event.preventDefault();
    // Connects to brewerydb api with search value
    API.searchBeerAPI(this.state.search)
      .then(res => {
        if (res.data.data === 'error') {
          throw new Error(res.data.data);
        } else {
          // Stores responses in array
          let results = res.data.data;
          console.log(results);
          // Maps through the array 
          results = results.map(result => {
            // Stores beer data in new object 
            result = {
              key: result.id,
              id: result.id,
              name: result.name,
              description: result.description,
              abv: result.abv,
            }
            console.log(result);

            return result;
          });
        }
      })
  };

  // Renders content onto main search page
  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Hop to It</h1>
        </Jumbotron>
        <h4>What kind of beer are you looking for?</h4>
        <Style
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
          {/* // suggestions={[
          //   "Ale",
          //   "India Pale Ale",
          //   "IPA",
          //   "Pale Ale",
          //   "Pilsner",
          //   "Porter",
          //   "Wheat Beer",
          //   "Bitter",
          //   "Brown Ale",
          //   "Saison",
          //   "Dunkel",
          //   "Bock",
          //   "Pale Lager",
          //   "Lambic",
          //   "Kolsch",
          //   "Barley Wine",
          //   "Gose",
          //   "Scotch Ale",
          //   "Tripel",
          //   "Dubbel",
          //   "Irish Red Ale",
          //   "Marzen",
          //   "Cream Ale",
          //   "Schwarzbier",
          //   "Old Ale",
          //   "Berliner Weisse",
          //   "Doppelbock",
          //   "Steam Beer",
          //   "Hefeweizen",
          //   "Stout",
          //   "Sour",
          //   "Lager", 
          //   "Amber Ale",
          //   "Rye Beer",
          //   "Vienna Lager",
          //   "Flanders Red Ale",
          //   "Trappist Beer",
          //   "Belgian",
          //   "Imperial Stout"
          // ]}
      {/* <h1>Zip Code:</h1>
      <Zip></Zip>
      <h1>Test Search Field:</h1> */}
      {/* <TestSearch
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
      /> */}
      </Container>
    );
  }
}

export default SearchBeers;