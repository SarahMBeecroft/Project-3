import React, { Component, Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import API from '../../utils/API';

/**
 * Map component itself
 */
const MapComponent = withScriptjs(withGoogleMap(props => {
  const lat = window.localStorage.getItem('userLat');
  const lng = window.localStorage.getItem('userLon');
  return <GoogleMap
    defaultZoom={12}
    defaultCenter={props.places.length > 0 ? props.places[0] : { lat: parseFloat(lat), lng: parseFloat(lng) }}
    defaultOptions={{ mapTypeControl: false }}
    onClick={props.hideInfoWindow}
  >
    {props.isMarkerShown && (props.places.map((place, index) =>
      <Marker
        key={index}
        position={place}
        animation={place.clicked ?
          window.google.maps.Animation.BOUNCE : 0}
        onClick={() => { props.onMarkerClick(index) }} />))
    }
  </GoogleMap>
}
))

/**
 * Map container with map component inside
 */
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

  componentWillUpdate(){
    this.getGeoLocation()
  }

  componentDidMount() {
    this.delayedShowMarker();
    this.getGeoLocation()
    /**
    * Set value to true on map load callback
    */
   onMapLoaded()
    function onMapLoaded() {
      console.log('map callback');
      window.isMapLoaded = true;
    }
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation()
      this.setState({ isMarkerShown: true })
    }, 5000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {

          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }


          }))
          console.log(position.coords);
          window.localStorage.setItem('userLat', position.coords.latitude)
          window.localStorage.setItem('userLon', position.coords.longitude)
        }
      )
    } else {
      throw ('something went wrong')
    }
  }

  render() {
    return (
      <Fragment>
        <div
          role='region'
          aria-label='map'
          className='map-container'
          style={{ marginLeft: '0' }}>
          <MapComponent
            isMarkerShown={this.props.places.length > 0}
            // googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAYg-4Jqya1zHBjFEP8Muuh3JcP2QraeAo&v=3.exp&libraries=geometry,drawing,places&callback=onMapLoaded'
            googleMapURL="/api/brewerymapsearch/onMapLoaded"
            
            loadingElement={<div style={{ height: `1000px`}} />}
            containerElement={<div style={{ height: `1000px`}} />}
            mapElement={<div style={{ height: `100%`, }} />}
            places={this.props.places}
            hideInfoWindow={this.props.hideInfoWindow}
            onMarkerClick={this.props.onMarkerClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default Map;
