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
    //   <div class="nav-wrapper">
    //     <a href="#" class="brand-logo">Logo</a>
    //     <ul id="nav-mobile" class="right hide-on-med-and-down">
    //       <li><a href="sass.html">Sass</a></li>
    //       <li><a href="badges.html">Components</a></li>
    //       <li><a href="collapsible.html">JavaScript</a></li>
    //     </ul>
    //   </div>
    // </nav>
    componentDidMount() {
        const options = {
            // hover: true,
            closeOnClick: true,
            alignment: "right",
            onOpenStart: () => {
                console.log("onOpenStart");
            },
            onOpenEnd: () => {
                console.log("onOpenEnd");
            },
            onCloseStart: () => {
                console.log("onCloseStart");
            },
            onCloseEnd: () => {
                console.log("onCloseEnd");
            },
            inDuration: 300,
            outDuration: 200
        };
        M.Dropdown.init(this.Dropdown, options);
    }


    render() {
        return (

            <div className="navMenu">
                {/* Dropdown Contents */}
                <ul id="dropdown1" className="dropdown-content">
                        <li><a href='/mybeers'>My Beers</a></li>
                        <li><a href='/topbeers'>Top Beers</a></li>
                        <li><a href='/signin'>Logout</a></li>
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
                            <li><a href="/"><i className="material-icons right">home</i></a></li>
                            {/* <li><a href="/mybeers">My Beers</a></li> */}
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Profile<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="/search"><i className="material-icons right">search</i></a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-nav">
                    <li><a href='/'>Home</a></li>
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Profile<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li><a href='/search'>Search</a></li>
                </ul>

            </div>


        )
    }

}



export default NavBar;
