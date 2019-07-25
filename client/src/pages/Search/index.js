import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import ABV from '../../components/BeerABV';
import Zip from '../../components/ZipCode';
import API from '../../utils/API';
import './style.css';
import TestSearch from '../../components/TestSearch/TestSearch';



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
            // Stores book data in new object 
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
        <h1>Beer Style:</h1>
        <Style
          suggestions={[
            "Ale",
            "India Pale Ale",
            "IPA",
            "Pale Ale",
            "Pilsner",
            "Porter",
            "Wheat Beer",
            "Bitter",
            "Brown Ale",
            "Saison",
            "Dunkel",
            "Bock",
            "Pale Lager",
            "Lambic",
            "Kolsch",
            "Barley Wine",
            "Gose",
            "Scotch Ale",
            "Tripel",
            "Dubbel",
            "Irish Red Ale",
            "Marzen",
            "Cream Ale",
            "Schwarzbier",
            "Old Ale",
            "Berliner Weisse",
            "Doppelbock",
            "Steam Beer",
            "Hefeweizen",
            "Stout",
            "Sour",
            "Lager", 
            "Amber Ale",
            "Rye Beer",
            "Vienna Lager",
            "Flanders Red Ale",
            "Trappist Beer",
            "Belgian",
            "Imperial Stout"
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
      <h1>Zip Code:</h1>
      <Zip></Zip>
      <h1>Test Search Field:</h1>
      <TestSearch
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
      />
      </Container>
    );
  }
}

export default SearchBeers;