import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
   
    render() {
        let style={
            height:"75vh",
            width:"100%",
            display:"block",
            position:"static"
        };    
        return (
          <Map style={style}  initialCenter={{
            lat: 41.32303015074849,             
            lng: 19.79514020160173
          }} google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>Place</h1>
                </div>
            </InfoWindow>
          </Map>
        );
      }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyC5JJUgdtFK5Q_CRFvQRPlVe39gFOBwIHA"
})(MapContainer)