
import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const pin = <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:"#d32323", size:"6x"}}/>; //Why doesn't it size up?  See https://github.com/FortAwesome/react-fontawesome

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 37.787600, 
            lng: -122.396630
            },
    zoom: 17
  };

  render() {
    return (
      <div style={{height: "100px", width: "100%"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent 
            lat={37.787600} 
            lng={-122.396630}
            text={pin}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;