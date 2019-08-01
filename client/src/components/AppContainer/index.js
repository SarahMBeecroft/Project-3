import React, { Component } from 'react';
import { connect } from 'react-redux';
// import AvatarImg from '../AvatarImg';
import NavBar from '../NavBar';

// import Header from '../Header';
import * as actions from '../../actions';
// import ResponsiveDrawer from '../Drawer';

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
        <div>
          {/* <Header /> */}
          <NavBar />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default connect(null, actions)(AppContainer);