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
                <div className='border'>
                <div className='cardContent'>
                <li className='search-list list-group-item' key={savedBeer._id}>
                  <Row className='SearchResult row' id={savedBeer.name + 'Card'}>
                    <Col size='2' className='beerImage'>
    
                    <img src={
                       savedBeer.label !== 'false' ? savedBeer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } alt='pint of beer' class='beer-img'/>  

                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>

                      <Row className='beerInfo'>

                        <h5 className='beerName'>{savedBeer.name}</h5>
                 
                        <h6 className='abv'>ABV: {savedBeer.abv}</h6>
                     
                        <p className='description'>{savedBeer.description}</p>     
               
                        <p className='breweryName'><b>Brewery:</b> {savedBeer.brewery.name}</p>
               
                        <a href={savedBeer.brewery.website} target='_blank'><p className='breweryweb'>Brewery Website</p></a>  

                        <p className='brewerylocation'><b>Brewery Address:</b> {savedBeer.brewery.location}</p> 

                      </Row>
                    </Col>
                  </Row>
                <br></br>
                <Row className='buttonDiv'>
                  <button className='deleteBtn btn btn-danger' id={savedBeer._id} onClick={() => props.handleDeleteButton(savedBeer._id)}>
                    Remove Beer
                  </button>
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