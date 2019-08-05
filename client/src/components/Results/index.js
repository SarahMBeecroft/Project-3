
import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const SearchResults = props => {
  console.log(props.userFavs);
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
                <div className='border'>
                <div className='cardContent'>
                <li className='search-list list-group-item' key={beer._id}>
                  <Row className='SearchResult row' id={beer.name + 'Card'}>
                    <Col size='2' className='beerImage'>
                      <img src={
                        beer.label ? beer.label :
                          'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                      } className="beer-img" alt='pint of beer' />
                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>
                      <Row className='beerInfo'>

                        <h5 className='beerName'>{beer.name}</h5>
                 
                        <h6 className='abv'>ABV: {beer.abv}</h6>
                      </Row>
                      <Row>
                        <p className='description'>{beer.description}</p>
                      </Row>
                      <Row>
                        <p className='breweryName'>Brewery: {beer.brewery.name}</p>
                      </Row>
                      <Row>
                        <p className='breweryweb'>Website: {beer.brewery.website}</p>
                      </Row>
                      <Row>                                          
                      <p className='brewerylocation'>Brewery Address: {beer.brewery.location}</p>
                      
                     </Row>
                    </Col>
                  </Row>

                  <Row className='buttonDiv'>
                    
                    <div className='buttons'>
                    <a href={beer.brewery.mapURL} target='new'><button className='mapDirection btn btn-primary'>Directions</button></a>  

                    <button className={props.userFavs.indexOf(beer._id) === -1 ? "saveBeer btn btn-primary": "saveBeer btn btn-primary disabled"} id={beer._id} onClick={(event) => props.handleSavedButton(beer)}>
                      {props.userFavs.indexOf(beer._id) === -1 ? "Favorite" : "Favorited"}
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

export default SearchResults