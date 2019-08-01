import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import API from '../../utils/API';
import SavedBeer from '../../components/MyBeers';
import { AppContext } from '../../components/AppContainer';

class MyBeers extends Component {
  // Context
  static contextType = AppContext;
  // Creates state
  state = {
    savedBeers: []
  };

  componentDidMount() {
    API.getBeers().
      then(res => this.setState({ savedBeers: res.data })).
      catch(err => console.log(err));
  }

  handleDeleteButton = id => {

    API.deleteBeer(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))

  }

  render() {
    console.log(this.context);
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Hop to It</h1>
        </Jumbotron>
        <SavedBeer
            savedBeers={this.state.savedBeers}
            handleDeleteButton={this.handleDeleteButton}
          />
      </Container>
    );
  }
}

export default MyBeers;