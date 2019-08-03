import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Style from '../../components/BeerStyle';
import API from '../../utils/API';
import './style.css';
import SearchResults from '../../components/Results';
import { set } from 'mongoose';
import { AppContext } from "../../components/AppContainer";
import GoogleApiWrapper from '../../components/CurrentLocation';
import CurrentLocation from '../../components/CurrentLocation/Map';


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
    savedBeers: [],
  };

  // componentDidUpdate() {
  //   // if (this.context) {
  //     API.getUserDetail(this.context).
  //       then(res => {
  //         console.log(res.data.favorites);
  //         if (this.state.savedBeers.length !== res.data.favorites.length) {
  //           this.setState({savedBeers: res.data.favorites});
  //         }
  //       }).
  //       catch();
  //   // }
  // };

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
          results = results.map(result => {
            // Stores beer data in new object 
            let address;
            if (result.breweries[0].locations) {
              address = result.breweries[0].locations[0].streetAddress + ', ' + result.breweries[0].locations[0].locality + ', ' + result.breweries[0].locations[0].region + ' ' + result.breweries[0].locations[0].postalCode;
            }
            else {
              address = "No address provided.";
            }
            result = {
              // key: result.id,
              _id: result.id,
              name: result.name,
              description: result.description,
              label: (result.labels ? result.labels.medium : false),
              abv: result.abv,
              brewery: {
                name: result.breweries[0].name,
                location: address,
                website: result.breweries[0].website
              }
              // breweryName: result.breweries[0].name,
              // breweryLocation: address
              // breweryLocation: result.breweries[0].locations[0].streetAddress +', '+ result.breweries[0].locations[0].locality + ', ' + result.breweries[0].locations[0].region +' '+ result.breweries[0].locations[0].postalCode
              // breweryGeo: {lat: result.breweries[0].locations.latitude[0], lon: result.breweries[0].locations[0].longitude }
            }
            console.log(result)

            return result;
          });
          // Sets empty beer array to new array of objects 
          this.setState({ beers: results, error: '' })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  // googleMapLink = breweryLocation => {
  //   const directionQuery = "https://www.google.com/maps/dir/?api=1&origin=" + pos.coords.latitude +','+ pos.coords.longitude
  //   +"&destination=" + replaceSpace(breweryLocation) + "&travelmode=driving";
  //   return directionQuery;
  //   }



  // replaceSpace = loc => {
  //   return loc.split(' ').join('+');
  // }




  // Handled saved button to save beers to "My Beers"
  // Pass it a beer object rather than an event
  handleSavedButton = theBeer => {
    console.log(theBeer);
    // event.preventDefault();  Don't need; not a form
    console.log(this.state.beers);

    API.addFav(this.context, theBeer).
      then(res => {
        console.log(res.data);
      }).
      catch(err => console.log(err));
  }

  // Renders content onto main search page
  render() {
    console.log(this.context);
    if (this.context === undefined) {
      // context doesn't seem to get userID properly on sign in.  Forcing a reload is sloppy, but it works.
      window.location.reload();
    }
    else {
      API.getUserDetail(this.context).
        then(res => {
          console.log(res.data.favorites);
          if (res.data.favorites) {
            if (this.state.savedBeers.length !== res.data.favorites.length) {
              this.setState({ savedBeers: res.data.favorites });
            }
          }
        }).
        catch();
    }

    return (
      <section id="search" className="section section-search darken-1 scrollspy">
        <Container fluid>
          <Jumbotron>
            <h1 className="title">Hop to It</h1>
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
          <h5>Your personalized beer results:</h5>
          <SearchResults
            beers={this.state.beers}
            // Save button isn't functional yet
            handleSavedButton={this.handleSavedButton}
          />
          <div className='map'>
            {/* <h5>Your current location:</h5> */}
            <GoogleApiWrapper></GoogleApiWrapper>
          </div>
        </Container></section>
    );
  }
}

export default SearchBeers;