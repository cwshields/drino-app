import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../../assets/scss/App.scss';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 34.048,
      lng: -118.253
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="dash-wrap">
        <div className="maps">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB8kY3BSx_PLxU4hxTP1PjhKtcnJJphGm4' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
 
export default Maps;