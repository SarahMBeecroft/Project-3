import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const TopBeer = props => {
  console.log(props.topBeers);
  console.log(props.userFavs);
  return (props.topBeers.length === 0) ? (
    <div className='card'>
      <div className='card-body player'>
        <div className='result'>
        </div>
      </div>
    </div>
  ) : (
    <div className='cards'>
      <div className='card-body'>
        <div className='result grid-container'>
          {props.topBeers.map(topBeer => {
            return (
                <div className='border'>
                <div className='cardContent'>
                <li className='search-list list-group-item' key={topBeer._id}>
                  <Row className='SearchResult row' id={topBeer._id + 'Card'}>
                    <Col size='2' className='beerImage'>
    
                    <img src={
                       topBeer.label !== 'false' ? topBeer.label :
                       'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                       } alt='pint of beer' className='beer-img'/>  

                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>
                      <Row className='beerInfo'>

                        <h5 className='beerName'>{topBeer.name}</h5>

                        <h6 className='abv'>ABV: {topBeer.abv}</h6>

                        <p className='description'>{topBeer.description}</p>     

                        <p className='breweryName'><b>Brewery:</b> {topBeer.brewery.name}</p>

                        <a href={topBeer.brewery.website} target='_blank'><p className='breweryweb'>Brewery Website</p></a>  

                        <p className='brewerylocation'><b>Brewery Address:</b> {topBeer.brewery.location}</p>

                      </Row>
                    </Col>
                  </Row>
             
                <Row className='buttonDiv'>
                <div className='buttons'>
                <a href={topBeer.brewery.mapURL} target='new'><button className='mapDirection btn btn-primary'>Directions</button></a>  

                <button className={props.userFavs.indexOf(topBeer._id) === -1 ? "saveBeer btn btn-primary": "saveBeer btn btn-primary disabled"} id={topBeer._id} onClick={(event) => props.handleSavedButton(topBeer)}>
                    {props.userFavs.indexOf(topBeer._id) === -1 ? "Favorite": "Favorited"}
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

export default TopBeer