import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import Wrapper from '../../components/Wrapper'
import API from '../../utils/API';
import SavedBeer from '../../components/MyBeers';
import { AppContext } from '../../components/AppContainer';

class MyBeers extends Component {
  // Context
  static contextType = AppContext;
  // Creates state
  state = {
    savedBeers: [],
    showModal: false
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

  handleDeleteButton = id => {
    // API.deleteBeer also operates on the global Beer collection, rather than the specific user.
    // I think API.updateUser is what we want here.
    // API.deleteBeer(id).
    //   then(res => this.componentDidMount()).
    API.updateUser(this.context, { $pull: { favorites: id } }).
      then(res => { this.setState({ savedBeers: res.data.favorites }) }).
      catch(err => console.log(err))
  }
  handleBarButton = id => {
    // do a thing with a modal, I think.
    // Could go to another page, though.
    console.log(this.state.showModal);
    this.setState({showModal: true});
  }

  render() {
    console.log(this.context);
    if (this.context) {
      API.getUserDetail(this.context).
        then(res => {
          if (res.data.favorites) {
            if (!this.state.savedBeers.length) {
              this.setState({ savedBeers: res.data.favorites })
              console.log(this.state.savedBeers);
            }
          }
        }).
        catch(err => { console.log(err) });
    }
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Hop to It</h1>
        </Jumbotron>
        <h5>Beers you've favorited:</h5>
        <Wrapper>
        <SavedBeer
            savedBeers={this.state.savedBeers}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default MyBeers;