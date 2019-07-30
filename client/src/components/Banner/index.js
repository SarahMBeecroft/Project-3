
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './style.css';
import M from "materialize-css/dist/js/materialize.min.js";
// import img1 from "./img/img1.jpg";
// import img2 from "./img/img2.jpg";
// import img3 from "./img/img3.jpg";
// import img4 from "./img/img4.jpg";


class Banner extends Component {

    componentDidMount() {
        var instance = M.Carousel.init({
            fullWidth: true,
            indicators: true
          });
    }

    render() {
        return (

            <div className="carousel carousel-slider">
                <a className="carousel-item" ><img src="https://ibb.co/M2NJPT0"></img></a>
                <a className="carousel-item" ><img src="https://ibb.co/R6KR6bq"></img></a>
                <a className="carousel-item" ><img src="https://ibb.co/9bHFZ8r"></img></a>
                <a className="carousel-item" ><img src="https://ibb.co/hcQv64D"></img></a>
            </div>


        )
    }

}



export default Banner;
