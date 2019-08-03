
import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';
import Wrapper from '../Wrapper';

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
          <div className='result'>
            {props.beers.map(beer => {
              return (
                <div className='border'>
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

                      <Row>
                        <h5 className='beerName'>{beer.name}</h5>
                      </Row>

                      <Row>
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
                        <a href={beer.brewery.mapURL} target='new'><button className='mapDirection btn btn-primary'>Direction</button></a>

                      </Row>
                    </Col>
                  </Row>

                  <br></br>
                  <Row className='buttonDiv'>
                    <button className={props.userFavs.indexOf(beer._id) === -1 ? "saveBeer btn btn-primary": "saveBeer btn btn-primary disabled"} id={beer._id} onClick={(event) => props.handleSavedButton(beer)}>
                      {props.userFavs.indexOf(beer._id) === -1 ? "Favorite" : "Favorited"}
                    </button>
                    <hr></hr>

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