import React, { Component, Fragment } from "react";
import API from "../utils/API";
import { AppContext } from "../components/AppContainer";


import Jumbotron from '../components/Jumbotron';
import { Container, Row, Col } from '../components/Grid';
import Wrapper from '../components/Wrapper'

function AddBarPage(props) {
    return (
        <AppContext.Consumer>
            {value => (
                <Fragment>
                    <p>context = {value}</p>
                </Fragment>
            )}
        </AppContext.Consumer>
    );
}

export default AddBarPage;