
import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const SearchResults = props => {
  return (props.beers.length === 0) ? (
    <div className='card'>
      <div className='card-body'>
        <div className='result'>
        </div>
      </div>
    </div>
  ) : (
      <div className='card'>
        <div className='card-body'>
          <div className='result'>
            {props.beers.map(beer => {
              return (
                <li className='search-list list-group-item' key={beer.id}>
                  <Row className='SearchResult row' id={beer.name + 'Card'}>
                    <Col size='2' className='beerImage'>
                     <img src={
                       beer.label ? beer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } alt='pint of beer'/> 
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
                      {/* <Row>
                        <p className='brewery'>{beer.breweries[0].location[0]}</p>
                      </Row> */}
                    </Col>
                  </Row>

                  <br></br>
                  <Row className='buttonDiv'>
                    <button className='saveBeer btn btn-primary' id={beer.id} onClick={(event) => props.handleSavedButton(beer)}>
                      Save to "My Beers"
                    </button>
                    <hr></hr>
                  </Row>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default SearchResults