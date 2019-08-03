import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import API from '../../utils/API';
import TopBeer from '../../components/TopBeers';

class TopBeers extends Component {

  // Creates state
  state = {
    topBeers: [],
    error: '',
    savedBeers: []
  };
  // API.getBeers() returns all the beers in the DB, which won't be the personalized list.
  // API.getUserDetail(this.context) will get the current user information, including the favorites list.
  // componentDidMount() {
  //   console.log(this.context);
  //   if (!this.context) {
  //     // reload if userId is null.
  //     // window.location.reload();
  //   }
  //   // API.getBeers().
  //   API.getUserDetail(this.context).
  //     then(res => this.setState({ savedBeers: res.data.favorites })).
  //     catch(err => { console.log(err) });
  // }

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
    API.getBeers(this.state.topBeers);
    then(res => {
      if (res.data.favorites) {
        if (!this.state.topBeers.length) {
          this.setState({ topBeers: res.data.favorites })
          console.log(this.state.topBeers);
        }
      }
    }).
    catch();
  }
  }
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Hop to It</h1>
      </Jumbotron>
      <TopBeer
          topBeers={this.state.topBeers}
          handleSavedButton={this.handleSavedButton}
        />
    </Container>
  );

export default TopBeers;