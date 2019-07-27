import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AvatarImg from '../AvatarImg';
import NavBar from '../NavBar';

// import Header from '../Header';
import * as actions from '../../actions';
// import ResponsiveDrawer from '../Drawer';

class AppContainer extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <NavBar />
        <div className="container">
        { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AppContainer);