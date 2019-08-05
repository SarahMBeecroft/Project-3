import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';

import API from '../../utils/API';

import { AppContext } from "../../components/AppContainer";
import BreweryMap from '../../components/BreweryMap';


function Brewery() {
  
    return (
     
        <Container fluid>      
          
        
          <h5>Breweries near you</h5>
         
            <BreweryMap />
        
        </Container>

    );
  }


export default Brewery;