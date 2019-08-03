
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './style.css';
import M from "materialize-css/dist/js/materialize.min.js";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import icon1 from "./img/icon1.jpg";
// import Search from "../Search";
import Style from '../BeerStyle';
import ABV from '../BeerABV';
import Zip from '../ZipCode';
import transitions from '@material-ui/core/styles/transitions';


class Banner extends Component {

    componentDidMount() {
        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
            indicators: false,
            height: 700,
            transition: 500,
            interval: 5000
        });

    }

    render() {
        return (
            <section className="slider">
                <ul className="slides">
                    <li>
                        <img src={img1}></img>
                        <div className="caption center-align">
                            <h1 className="bigBannerCaption">Hop to It!</h1>
                            <a href="#search" className="waves-effect waves-light googlebtn btn-large">Get Started</a>

                        </div>
                    </li>
                    <li>
                        <img src={img2}></img>
                        <div className="caption left-align">
                            <h1 className="bannerCaption">Find your perfect beer</h1>
                        </div>
                    </li>
                    <li>
                        <img src={img3}></img>
                        <div className="caption right-align">
                            <h1 className="bannerCaption">Try it at your local bar</h1>
                        </div>
                    </li>
                    <li>
                        <img src={img4}></img>
                        <div className="caption center-align">
                            <h1 className="bannerCaption">Hop to It!</h1>
                        </div>
                    </li>

                </ul>





            </section>



        )
    }

}



export default Banner;
