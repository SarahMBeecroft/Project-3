import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import AvatarImg from '../AvatarImg';
import './style.css';
import M from "materialize-css";



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
            <div>
                <div className="navMenu">
                    {/* Dropdown Contents */}
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href='/mybeers'>My Beers</a></li>
                        <li><a href='/topbeers'>Top Beers</a></li>
                        <li><a href='/signin'>Logout</a></li>
                    </ul>

                    {/* Nav Contents */}
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo right"></a>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a href="/">
                                    {/* <i class="material-icons right">home</i> */}
                                    Home
                                </a></li>

                                <li><a ref={Dropdown => {
                                    this.Dropdown = Dropdown;
                                }} className="dropdown-trigger" href="#!" data-target="dropdown1">
                                    {/* <i class="material-icons right">account_circle</i> */}
                                    Profile
                                </a>
                                </li>
                                <li><a href="/search">
                                    {/* <i class="material-icons right">search</i> */}
                                    Search
                                </a></li>
                            </ul>
                        </div>
                    </nav>

                </div>

            </div>


        )
    }

}






export default NavBar;
