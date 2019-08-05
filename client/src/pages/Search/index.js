import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Wrapper from '../../components/Wrapper'
import Style from '../../components/BeerStyle';
import API from '../../utils/API';
import './style.css';
import SearchResults from '../../components/Results';
import { set } from 'mongoose';
import { AppContext } from "../../components/AppContainer";
// import GoogleApiWrapper from '../../components/CurrentLocation';
import BreweryMap from '../../components/BreweryMap';

import icon4 from "../../components/AvatarImg/img/icon4.png";

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
            //map url
            var originLat = window.localStorage.getItem('userLat');
            var originLon = window.localStorage.getItem('userLon');

            function createGoogleMapsLink(address) {
              var directionQuery = "https://www.google.com/maps/dir/?api=1&origin=" + originLat + ',' + originLon + "&destination=" + replaceSpace(address) + "&travelmode=driving";
              return directionQuery;
            }
            //function to replace space with + for the url
            function replaceSpace(loc) {
              return loc.split(' ').join('+');
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
                mapURL: createGoogleMapsLink(address),
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

  // Handled saved button to save beers to "My Beers"
  // Pass it a beer object rather than an event
  handleSavedButton = theBeer => {
    console.log(theBeer);
    // event.preventDefault();  Don't need; not a form
    console.log(this.state.beers);

    API.addFav(this.context, theBeer).
      then(res => {
        console.log(res.data);
        this.setState({ savedBeers: res.data });
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
              this.setState({ savedBeers: res.data.favorites.map(beer => beer._id) });
            }
          }
        }).
        catch();
    }

    return (
      <section id="search" className="section section-search darken-1 scrollspy">
        <Container fluid>
          <div className="row">
            <div className="col s12">
              <Jumbotron>
                <h1 className="title">Hop to It</h1>

                <img className="circle bigIcon center-align" src={icon4}></img>

              </Jumbotron>
            </div>
          </div>

          <div className="row jumbotron2">
            <div className="col s12">
              <Jumbotron>
                <h4>What kind of beer are you looking for?</h4>
                <Style
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
              </Jumbotron>
            </div>
          </div>




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

          {/* <h5>Your personalized beer results:</h5> */}
          <h5>Your personalized beer results:</h5>
          <Wrapper>
            <SearchResults
              beers={this.state.beers}
              userFavs={this.state.savedBeers}
              handleSavedButton={this.handleSavedButton}
            />

            
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export default SearchBeers;