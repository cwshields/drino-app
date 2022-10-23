import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../../assets/scss/App.scss';

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 32.748,
      lng: -97.003
    },
    zoom: 10
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="dash-wrap">
        <div className="maps">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB-Wa4BvnrygzZtEUYLoaTU3VIM8RodIgg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
 
export default Maps;