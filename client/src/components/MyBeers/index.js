import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const SavedBeer = props => {
  return (props.savedBeers.length === 0) ? (
    <div className='card grid-container'>
      <div className='card-body player'>
        <div className='result'>
        </div>
      </div>
    </div>
  ) : (
    <div className='cards'>
      <div className='card-body'>
        <div className='result grid-container'>
          {props.savedBeers.map(savedBeer => {
            return (
                <div className='border2'>
                <div className='cardContent2'>
                <li className='search-list list-group-item' key={savedBeer._id}>
                  <Row className='SearchResult row' id={savedBeer.name + 'Card'}>
                    <Col size='2' className='savedBeerImage'>
                      <img src={
                       savedBeer.label !== 'false' ? savedBeer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } alt='pint of beer'/>  
                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>

                  </Col>
                  <Col size='1' className='emptyCol' />
                  <Col size='9' className='beerInfo'>

                      <Row className='beerInfo2'>

                        <h5 className='beerName2'>{savedBeer.name}</h5>
                 
                        <h6 className='abv2'>ABV: {savedBeer.abv}</h6>
                     
                        <p className='description2'>{savedBeer.description}</p>     
               
                        <p className='breweryName2'><b>Brewery:</b> {savedBeer.brewery.name}</p>
               
                        <a href={savedBeer.brewery.website} target='_blank'><p className='breweryweb'>Brewery Website</p></a>  

                        <p className='brewerylocation2'><b>Brewery Address:</b> {savedBeer.brewery.location}</p> 

                      </Row>
                    </Col>
                  </Row>
  
                <Row className='buttonDiv2'>
                  <div className='buttons2'>
                    <button className='btn removeBeer' onClick={() => props.handleDeleteButton(savedBeer._id)}>
                      Remove Beer
                  </button>
              
               
                    <button className="btn modal-trigger addLocation" data-target="bar-modal" onClick={() => props.handleBarButton(savedBeer._id)}>
                    {/* <button className="btn modal-trigger" data-target="bar-modal"> */}
                      Add a Location
                  </button>
                  </div>
                </Row>

              </li>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    )
}

export default SavedBeer