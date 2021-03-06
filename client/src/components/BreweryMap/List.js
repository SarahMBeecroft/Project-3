import React, { Component } from 'react';
// import Geocode from 'react-geocode';
import escapeRegExp from 'escape-string-regexp';


class List extends Component {
  state = {
    places: [],
    query: ''
  }

  /**
   * COMPONENT LIFECYCLE METHOD
   */

  componentDidMount() {
    // Geocode.fromAddress("Googleplex").then(
      // geoResponse => {
        const lat = window.localStorage.getItem('userLat');
        const lng = window.localStorage.getItem('userLon');
        // const { lat, lng } = geoResponse.results[0].geometry.location;
        console.log (lat, lng)
        this.props.foursquare.venues.getVenues({
          'll': `${lat},${lng}`,
          'categoryId': '50327c8591d4c4b30a586d5d'
          //foursquare brewery categoryID:https://developer.foursquare.com/docs/resources/categories
        }).then(fsResponse => {
          const venues = fsResponse.response.venues;
          this.props.setMarkers(venues);
          this.setState({ places: venues });
        });
      // }
    // );
  }

  /**
   * HANDLERS
   */

  /**
   * Handle query update
   */
  handleQueryUpdate = (query) => {
    this.setState({ query }, () => {
      const filtered = this.getFilteredPlaces();
      this.props.setMarkers(filtered);
    });
  }

  /**
   * Handles click on sandwich button
   * to show and hide sidebar
   */
  handleSandwichClick = () => {
    const map = document.querySelector('.map-container');
    map.style.marginLeft = map.style.marginLeft === '250px' ? '0' : '250px';

    const sandwich = document.querySelector('.sandwich');
    sandwich.style.left = sandwich.style.left === '250px' ? '0' : '250px';
  }

  /**
   * FUNCTIONS
   */

  /**
   * Returns places filtered in accordance with query
   */
  getFilteredPlaces() {
    const { query, places } = this.state;

    if (!query) {
      return places;
    }

    const match = new RegExp(escapeRegExp(query), 'i');
    return places.filter(p => match.test(p.name));
  }

  /**
   * Returns input field for filter
   */
  getInputField = () => {
    const { query } = this.state;

    return <input
      tabIndex={1}
      className='filter-places'
      type='text'
      value={query}
      onChange={event => this.handleQueryUpdate(event.target.value)}
      placeholder='Filter places' />
  }

  /**
   * Returns ordered list of places
   */
  getPlaceList = () => {
    let filteredPlaces = this.getFilteredPlaces();

    return (
      <ol className='places' role='listbox' aria-label='List of places'>
        {filteredPlaces.map((p, index) =>
          <li
            tabIndex={index + 2}
            role='option'
            key={index}
            className='place'
            onClick={() => {this.props.onPlaceClick(index)}}
            onKeyUp={event => {
              if (event.keyCode === 13) {
                this.props.onPlaceClick(index);
              }
            }}>
              {p.name}
          </li>
        )}
      </ol>
    )
  }

  render() {
    return (
      // <div>
        <div className='sidebar'>
          <div className='heading' role='heading'>
            <h1 className='title'>
              Places
            </h1>
            {this.getInputField()}
          </div>
          <div className='place-list' role='region' style={{height: '1000px'}}>
            {this.getPlaceList()}
          </div>
        {/* </div> */}
        {/* <div
          tabIndex='-1'
          style={{left: '250px'}}
          className='sandwich'
          onClick={this.handleSandwichClick}>
          <img
            src='/menu.png'
            alt='Toggle menu' />
        </div> */}
      </div>
    );
  }
}

export default List;
