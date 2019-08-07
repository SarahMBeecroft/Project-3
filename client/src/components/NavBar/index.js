import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import AvatarImg from '../AvatarImg';
import './style.css';
import M from "materialize-css/dist/js/materialize.min.js";



import * as actions from '../../actions';

class NavBar extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }


    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }



    // }
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

            <div className="navMenu">

                <ul id="dropdown1" className="dropdown-content">
                    <li><a href='#'>My Beers</a></li>
                    <li><a href='#'>Top Beers</a></li>
                    <li><a href='#'>Brewery</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">

                        {/* Logo */}
                        <a href="#" className="brand-logo right"><AvatarImg /></a>

                        {/* Hamburger Icon */}
                        <a href="#" className="sidenav-trigger" data-target="mobile-nav">
                            <i className="material-icons">menu</i>
                        </a>


                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li className="navLink1"><a href="/">Home</a></li>
                            <li className="navLink1"><a href="/mybeers">My Beers</a></li>
                            <li className="navLink1"><a href="/topbeers">Top Beers</a></li>
                            <li className="navLink1"><a href="/search">Search</a></li>
                            <li className="navLink1"><a href="/brewery">Brewery</a></li>
                            <li className="navLink1"><a href="/signin">Logout</a></li>


                        </ul>
                    </div>


                </nav>

                <ul className="sidenav" id="mobile-nav">
                    <li className="navLink1"><a href="/">Home</a></li>
                    <li className="navLink1"><a href="/mybeers">My Beers</a></li>
                    <li className="navLink1"><a href="/topbeers">Top Beers</a></li>
                    <li className="navLink1"><a href="/search">Search</a></li>
                    <li className="navLink1"><a href="/brewery">Brewery</a></li>
                    <li className="navLink1"><a href="/signin">Logout</a></li>
                </ul>

            </div>


        )
    }

}



export default NavBar;
