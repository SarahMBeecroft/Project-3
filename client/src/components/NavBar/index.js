import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import AvatarImg from '../AvatarImg';
import './style.css';


import * as actions from '../../actions';

class NavBar extends Component {
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
            <div class="navMenu">
                <ul id="dropdown1" class="dropdown-content">
                    <li><a href='#'>One</a></li>
                    <li><a href='#'>Two</a></li>
                    <li><a href='#'>Three</a></li>
                </ul>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo right"><AvatarImg /></a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="/"><i class="material-icons right">home</i></a></li>
                            {/* <li><a href="/mybeers">My Beers</a></li> */}
                            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Profile<i class="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="/search"><i class="material-icons right">search</i></a></li>
                        </ul>
                    </div>
                </nav>
                

            </div>

        )
    }

}






export default NavBar;
