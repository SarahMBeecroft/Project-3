import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import API from '../../utils/API';


/**
 * Set value to true on map load callback
 */


function onMapLoaded() {
  console.log('map callback');
  window.isMapLoaded = true;
  

  
}


/**
 * Map component itself
 */
const MapComponent = withScriptjs(withGoogleMap(props => {
    return <GoogleMap
      defaultZoom={10}
      defaultCenter={props.places.length > 0 ? props.places[0] : {lat: 47.6062, lng: -122.0841}}
      defaultOptions={{mapTypeControl: false}}
      onClick={props.hideInfoWindow}
      >
      {props.isMarkerShown && (props.places.map((place, index) =>
        <Marker
          key={index}
          position={place}
          animation={place.clicked ?
            window.google.maps.Animation.BOUNCE : 0}
          onClick={() => {props.onMarkerClick(index)}} /> ))
      }
    </GoogleMap>
  }
))

/**
 * Map container with map component inside
 */
class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

  // componentWillUpdate(){
  //   this.getGeoLocation()
  // }

  componentDidMount() {
    this.delayedShowMarker();
    this.getGeoLocation()
    
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation()
      this.setState({ isMarkerShown: true })
    }, 5000)
  }

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  //   this.delayedShowMarker()
  // }

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
        throw('something went wrong')
    }

  }

  render() {
    return <div
      role='region'
      aria-label='map'
      className='map-container'
      style={{marginLeft: '250px'}}>
      <MapComponent
        isMarkerShown={this.props.places.length > 0}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAYg-4Jqya1zHBjFEP8Muuh3JcP2QraeAo&v=3.exp&libraries=geometry,drawing,places&callback=onMapLoaded'
        //{API.breweryMapAPI}
        loadingElement={<div style={{ height: `100%`, width:'50%' }} />}
        containerElement={<div style={{ height: `63%`, width:'40%' }} />}
        mapElement={<div style={{ height: `100%`, }} />}
        places={this.props.places}
        hideInfoWindow={this.props.hideInfoWindow}
        onMarkerClick={this.props.onMarkerClick}
      />
    </div>;
  }
}

export default Map;
