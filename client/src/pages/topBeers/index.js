import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import API from '../../utils/API';
import TopBeer from '../../components/TopBeers';
import { AppContext } from '../../components/AppContainer';


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
        <Jumbotron>
          <h1>Hop to It</h1>
        </Jumbotron>
        <TopBeer
          topBeers={this.state.topBeers}
          userFavs={this.state.savedBeers}
          handleSavedButton={this.handleSavedButton}
        />
      </Container>
    );
  }
}


export default TopBeers;