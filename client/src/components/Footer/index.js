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
                                Hop to It was created by Joshua Richardson, Se Won Park, Marcos Benitez, and Sarah Beecroft. We designed this app to help beer lovers narrow down beer selections in a sea of choice. Additionally, this app will let you favorite beers and mark when beers are available at breweries nearby to help others locate beers in their area. This cuts down on choosing time so you can spend more time enjoying a cold one with your friends. Cheers!
                            </p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <div className="row">
                                <h5 className="white-text footerTitle">Links</h5>
                            </div>
                            <div className="linksContainer">
                                <a href="https://github.com/SarahMBeecroft/Project-3" target="_blank"><i className="fab fa-github-square"></i></a>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fas fa-envelope-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Copyright Hop to It Inc.
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                    </div>
                </div>
            </footer>






        )
    }

}



export default Footer;
