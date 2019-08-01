import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  // <nav>
  //   <div className="nav-wrapper">
  //     <a href="#" className="brand-logo">Logo</a>
  //     <ul id="nav-mobile" className="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="badges.html">Components</a></li>
  //       <li><a href="collapsible.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>

  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><AvatarImg /></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Test 1</a></li>
            <li className="tab"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
            <li className="tab"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
      </nav>

      // <ul className="sidenav" id="mobile-demo">
      //   <li><a href="sass.html">Sass</a></li>
      //   <li><a href="badges.html">Components</a></li>
      //   <li><a href="collapsible.html">JavaScript</a></li>
      // </ul>

      // <div id="test1" className="col s12">Test 1</div>
      // <div id="test2" className="col s12">Test 2</div>
      // <div id="test3" className="col s12">Test 3</div>
      // <div id="test4" className="col s12">Test 4</div>
    );
  }
}





function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, actions)(Header);
