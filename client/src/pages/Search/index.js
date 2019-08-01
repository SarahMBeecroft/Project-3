import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import API from '../../utils/API';
import './style.css';
import SearchResults from '../../components/Results';
import { set } from 'mongoose';
import GoogleApiWrapper from '../../components/CurrentLocation';
import { AppContext } from "../../components/AppContainer";

/*******************
 * 
 * To create the query, each text input in the form will need to prepend the parameter
 * you are searching for to its associated state variable : 'q=${this.state.search}',
 * 'abv=${this.state.abv}', etc.
 * When the form is submitted, it will need to concatenate all the search-related state variables with '&':
 * this.state.search + "&" + this.state.abv
 * Might be cooler to store everything an array and using array.join("&") to build the query...
 * 
 *******************/

// Currently set up to use test search field component
class SearchBeers extends Component {
  // Context
  static contextType = AppContext;
  // Creates state
  state = {
    search: '',
    beers: [],
    error: '',
    message: '',
    savedBeers: []
  };

  componentDidUpdate() {
    API.getUserDetail(this.context).
      then(res => {
        console.log(res.data.favorites);
      }).
    // API.getBeers().
    //   then(res => {
    //     this.setState({ savedBeers: res.data });
    //     console.log(this.state.savedBeers);
    //     console.log("search page props:")
    //     console.log(this.props);
    //   }).
      catch();
  };
  // Takes value from search input 
  handleInputChange = event => {
    this.setState({ search: `q=${event.target.value}` });
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
          // Maps through the array 
          results = results.map(result => {
            // Stores beer data in new object 
            result = {
              key: result.id,
              id: result.id,
              name: result.name,
              description: result.description,
              label: (result.labels ? result.labels.medium : false),
              abv: result.abv,
              breweries:[...result.breweries]}

         
            
          
            
           console.log(result)
           console.log(result.breweries)
           return result;

                  
            
            
    
            
         
            

        
          });
         
          // Sets empty beer array to new array of objects 
          this.setState({ beers: results, error: '' })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  // Handled saved button to save beers to "My Beers"
  // Pass it a beer object rather than an event
  handleSavedButton = theBeer => {
    console.log(theBeer);
    // event.preventDefault();  Don't need; not a form
    console.log(this.state.beers);
    // let savedBeers = this.state.beers.filter(beer => beer.id === theBeer.id)
    // savedBeers = savedBeers[0];
    API.getBeers({id: theBeer.id}).
      then(res => {
        console.log(res.data);
        // If the selected beer does not exist in the DB, add it.
        if (!res.data.length) {
          API.createBeer(theBeer).
            then((res) => {
              if (res.data) {
                let savedBeers = this.state.savedBeers;
                savedBeers.push(theBeer);
                this.setState({ savedBeers });
                alert('Beer saved to "My Beers');
              }
            }).
            catch(err => console.log(err));
        }
        else {
          alert("already saved, homes");
          // Don't save the beer to the DB twice;
          // Do *something* to add it to the user's favorites.
        }
      }).
      catch(err => console.log(err));
  }

  // Renders content onto main search page
  render() {
    console.log(this.context);
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
        <div className='container'>
          <div className='row'>
            <div className='col m6'>
              <h5>Your personalized beer results:</h5>
              <SearchResults
                beers={this.state.beers}
                // Save button isn't functional yet
                handleSavedButton={this.handleSavedButton}
              />
            </div>
            <div className='col m4'>
              <h5>Your current location:</h5>
              <GoogleApiWrapper></GoogleApiWrapper>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SearchBeers;