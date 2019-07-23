import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import * as actions from '../../actions';

class AppContainer extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        { this.props.children }
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(AppContainer);