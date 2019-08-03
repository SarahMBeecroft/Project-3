import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const TopBeer = props => {
  console.log(props.topBeers);
  return (props.topBeers.length === 0) ? (
    <div className='card'>
      <div className='card-body player'>
        <div className='result'>
          <h3>Check out favorite beers:</h3>
        </div>
      </div>
    </div>
  ) : (
      <div className='card-body player'>
        <div className='result'>
          <h3>Top Beers:</h3>
          {props.topBeers.map(topBeer => {
            return (
                <li className='search-list list-group-item' key={topBeer._id}>
                  <Row className='SearchResult row' id={topBeer._id + 'Card'}>
                    <Col size='2' className='beerImage'>
    
                    <img src={
                       topBeer.label !== 'false' ? topBeer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } alt='pint of beer' class='beer-img'/>  

                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>

                      <Row>
                        <h5 className='beerName'>{topBeer.name}</h5>
                      </Row>

                      <Row>
                        <h6 className='abv'>ABV: {topBeer.abv}</h6>
                      </Row>
                      <Row>
                        <p className='description'>{topBeer.description}</p>
                      </Row>
                    </Col>
                  </Row>
                <br></br>
                <Row className='buttonDiv'>
                <button className='saveBeer btn btn-primary' id={topBeer._id} onClick={(event) => props.handleSavedButton(topBeer)}>
                    Favorite
                </button>
                </Row>
              </li>
            );
          })}
        </div>
      </div>
    )
}

export default TopBeer