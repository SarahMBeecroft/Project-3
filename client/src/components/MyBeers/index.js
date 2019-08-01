import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const SavedBeer = props => {
  return (props.savedBeers.length === 0) ? (
    <div className='card'>
      <div className='card-body player'>
        <div className='result'>
          <h3>My Beers:</h3>
        </div>
      </div>
    </div>
  ) : (
      <div className='card-body player'>
        <div className='result'>
          <h3>My Beers:</h3>
          {props.savedBeers.map(savedBeer => {
            return (
                <li className='search-list list-group-item' key={savedBeer._id}>
                  <Row className='SearchResult row' id={savedBeer.name + 'Card'}>
                    <Col size='2' className='beerImage'>
                     <img src={'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'} className="beer-img" alt='pint of beer'/> 
                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>

                      <Row>
                        <h5 className='beerName'>{savedBeer.name}</h5>
                      </Row>

                      <Row>
                        <h6 className='abv'>ABV: {savedBeer.abv}</h6>
                      </Row>
                      <Row>
                        <p className='description'>{savedBeer.description}</p>
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
            );
          })}
        </div>
      </div>
    )
}

export default SavedBeer