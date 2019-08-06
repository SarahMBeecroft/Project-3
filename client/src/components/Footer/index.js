import React, { Component } from 'react';
import AvatarImg from '../AvatarImg';
import './style.css';
import M from "materialize-css/dist/js/materialize.min.js";




class Footer extends Component {

    render() {
        return (

            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text footerTitle">About Us:</h5>
                            <p className="grey-text text-lighten-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <div className="row">
                                <h5 className="white-text footerTitle">Links</h5>
                            </div>
                            <div className="linksContainer">
                                <i className="fab fa-github-square"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fas fa-envelope-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Copyright Hop to It inc.
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                    </div>
                </div>
            </footer>






        )
    }

}



export default Footer;
