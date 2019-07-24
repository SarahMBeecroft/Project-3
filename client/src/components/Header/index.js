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
  //   <div class="nav-wrapper">
  //     <a href="#" class="brand-logo">Logo</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="badges.html">Components</a></li>
  //       <li><a href="collapsible.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
        <Link className="brand-logo" to="/">Hop To It</Link>

           <ul className="nav navbar-nav ml-auto">
            { !this.props.isAuth ?
              [<li className="nav-item" key="signup">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>,
              <li className="nav-item" key="signin">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>] : null }            
            { this.props.isAuth ?
              <li className="nav-item">
                <Link className="nav-link" to="/signout" onClick={this.signOut}>Sign Out</Link>
              </li> : null }
          </ul>
        </div>
        
      </nav>
    );
  }
}





function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, actions)(Header);
