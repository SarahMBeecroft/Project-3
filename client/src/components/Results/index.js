
import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';
import Wrapper from '../Wrapper';

const SearchResults = props => {
  return (props.beers.length === 0) ? (
    <div className='card grid-container'>
      <div className='card-body'>
        <div className='result'>
        </div>
      </div>
    </div>
  ) : ( 
      <div className='cards'>
        <div className='card-body'>
          <div className='result grid-container'>
            {props.beers.map(beer => {
              return (
                <div className='border fluid'>
                <li className='search-list list-group-item' key={beer._id}>
                  <Row className='SearchResult row' id={beer.name + 'Card'}>
                    <Col size='2' className='beerImage'>
                     <img src={
                       beer.label ? beer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } className="beer-img" alt='pint of beer'/> 
                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>
                      <Row className='beerInfo'>

                        <h5 className='beerName'>{beer.name}</h5>
                 
                        <h6 className='abv'>ABV: {beer.abv}</h6>
                     
                        <p className='description'>{beer.description}</p>     
               
                        <p className='breweryName'>Brewery: {beer.brewery.name}</p>
               
                        <p className='breweryweb'>Website: {beer.brewery.website}</p>
                                         
                        <a href="https://google.com"><p className='brewerylocation'>Brewery Address: {beer.breweryLocation}</p></a>

                      </Row>
                    </Col>
                  </Row>

                  <Row className='buttonDiv'>
                    <button className='saveBeer btn btn-primary' id={beer.id} onClick={(event) => props.handleSavedButton(beer)}>
                      Favorite
                    </button>
                  </Row>
                </li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default SearchResults