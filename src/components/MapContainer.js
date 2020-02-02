import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {
  Link
} from "react-router-dom";

const mapStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width:'100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 43.768853,
         lng: -79.505030
        }}
      >
        <Link to='/signin'>
        <Marker
            lat={11.0168}
            lng={76.9558}
            name="My Marker"
            color="blue"
          />
        </Link>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-fH6qrH2MU_OYHO2jD673hdEMxpVf1FA'
})(MapContainer);
