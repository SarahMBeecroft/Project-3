
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
                <div className='border1'>
                <div className='cardContent1'>
                <li className='search-list list-group-item' key={beer._id}>
                  <Row className='SearchResult row' id={beer.name + 'Card'}>
                    <Col size='2' className='beerImage1'>
                      <img src={
                        beer.label ? beer.label :
                          'https://cdn.pastemagazine.com/www/articles/2019/07/01/hazy-IPA-generic-main.jpg'
                      } className="beer-img1" alt='pint of beer' />
                    </Col>
                    <Col size='1' className='emptyCol' />
                    <Col size='9' className='beerInfo'>
                      <Row className='beerInfo'>

                        <h5 className='beerName1'>{beer.name}</h5>
                 
                        <h6 className='abv1'>ABV: {beer.abv}</h6>
                     
                        <p className='description1'>{beer.description}</p>     
               
                        <p className='breweryName1'><b>Brewery:</b> {beer.brewery.name}</p>
               
                        <a href={beer.brewery.website} target='_blank'><p className='breweryweb'>Brewery Website</p></a>  

                        <p className='brewerylocation1'><b>Brewery Address:</b> {beer.brewery.location}</p>

                        </Row>
                      </Col>
                    </Row>

                  <Row className='buttonDiv1'>
                    
                    <div className='buttons1'>
                    <a href={beer.brewery.mapURL} target='new'><button className='mapDirection1 btn btn-primary'>Directions</button></a>  

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