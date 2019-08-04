import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Wrapper from '../../components/Wrapper'
import API from '../../utils/API';
import TopBeer from '../../components/TopBeers';
import { AppContext } from '../../components/AppContainer';
import GoogleApiWrapper from '../../components/CurrentLocation';
import CurrentLocation from '../../components/CurrentLocation/Map';


class TopBeers extends Component {
  // Context-- for the user's favorites list
  static contextType = AppContext;
  // Creates state
  state = {
    topBeers: [],
    error: '',
    savedBeers: []
  };
  // API.getBeers() returns all the beers in the DB, which won't be the personalized list.
  // API.getUserDetail(this.context) will get the current user information, including the favorites list.
  componentDidMount() {
    API.getBeers("").
      then(res => {
        console.log(res.data);
        this.setState({ topBeers: res.data });
      }).
      catch(err => { console.log(err) });
  }

  // Function to let users favorite a beer from the top beers page 
  handleSavedButton = theBeer => {
    console.log(theBeer);

    console.log(this.state.topBeers);

    API.addFav(this.context, theBeer).
      then(res => {
        console.log(res.data);
        this.setState({ savedBeers: res.data });
      }).
      catch(err => console.log(err));
  }

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
            const listFavsIDs = res.data.favorites.map(fav => fav._id);
            if (this.state.savedBeers.length !== listFavsIDs.length) {
              this.setState({ savedBeers: listFavsIDs });
              console.log(this.state.savedBeers);
            }
          }
        }).
        catch(err => { console.log(err); });
    }

    return (
      <Container fluid>
        <h5>Beers all users have favorited:</h5>
        <Wrapper>
          <TopBeer
            topBeers={this.state.topBeers}
            userFavs={this.state.savedBeers}
            handleSavedButton={this.handleSavedButton}
          />
          <div className='map'>
            {/* <h5>Your current location:</h5> */}
            <GoogleApiWrapper></GoogleApiWrapper>
          </div>
        </Wrapper>
      </Container>
    );
  }
}


export default TopBeers;