
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
import Style from '../../components/BeerStyle';
import ABV from '../../components/BeerABV';
import Zip from '../../components/ZipCode';


class Banner extends Component {

    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, {
            duration: 2000,
            fullWidth: true,
            indicators: true,
            dist: 0
        });
    }

    render() {
        return (
            <div className="bigBanner">
                <div className="carousel carousel-slider">
                    <a className="carousel-item" ><img src={img1}></img></a>
                    <a className="carousel-item" ><img src={img2}></img></a>
                    <a className="carousel-item" ><img src={img3}></img></a>
                    <a className="carousel-item" ><img src={img4}></img></a>

                    <div className="logo-overlay">
                        <a className="big-logo" ><img src={icon1} className="circle responsive-img"></img></a>
                    </div>

                    <div className="searchBar">
                        <div className="row">
                            <div className="col s12">
                                <Style />
                            </div>
                        </div>

                    </div>
                </div>





            </div>



        )
    }

}



export default Banner;
