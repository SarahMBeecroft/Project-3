
import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const SearchResults = props => {
  return (props.beers.length === 0) ? (
    <div className='card'>
      <div className='card-body'>
        <div className='result'>
          <h2>Your personalized beer results:</h2>
        </div>
      </div>
    </div>
  ) : (
      <div className='card'>
        <div className='card-body'>
          <div className='result'>
            {props.beers.map(beer => {
              return (
                <li className='search-list list-group-item' key={beer._id}>
                  <Row className='SearchResult row' id={beer.name + 'Card'}>
                    <Col size='12' className='beerInfo'>

                      <Row>
                        <h3 className='beerName'>{beer.name}</h3>
                      </Row>
                      <Row>
                        <h4 className='brewery'>{beer.name_breweries}</h4>
                      </Row>
                      <Row>
                        <h4 className='styleName'>{beer.style_name}</h4>
                      </Row>
                      <Row>
                        <p className='abv'>{beer.abv}</p>
                      </Row>
                      <Row>
                        <p className='beerDescription'>{beer.descript}</p>
                      </Row>

                    </Col>
                  </Row>
                  <br></br>
                  <Row className='buttonDiv'>
                    <button className='saveBeer btn btn-primary' id={beer.id} onClick={(event) => props.handleSavedButton(event)}>
                      Save to "My Beers"
                    </button>
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