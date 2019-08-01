import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AvatarImg from '../AvatarImg';
import NavBar from '../NavBar';
import Banner from '../Banner'

// import Header from '../Header';
import * as actions from '../../actions';

// context.  Adding more stuff we haven't dealt with...
export const AppContext = React.createContext(null);

class AppContainer extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    // console.log(this.props.userId);
    return (
      // this should make our userId available to the application...
      <AppContext.Provider value={this.props.userId}>

          <NavBar />
          <Banner />
          <div className="container">
            {this.props.children}
          </div>

      </AppContext.Provider>
    );
  }
}

export default connect(null, actions)(AppContainer);