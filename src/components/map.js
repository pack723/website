import React from "react"
import { FaMapPin } from "react-icons/fa"
import GoogleMapReact from "google-map-react"

const Marker = props => {
  return (
    <>
      <div className="pin">
        {" "}
        <span className="icon has-text-primary">
          <FaMapPin />
        </span>
      </div>
    </>
  )
}

const Map = () => (
  <div className="map-container">
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.MAP_APIKEY}` }}
      defaultCenter={{ lat: 36.072263, lng: -79.780294 }}
      defaultZoom={17}
    >
      <Marker lat={36.072263} lng={-79.780294} text="Bethel AME Church" />
    </GoogleMapReact>
  </div>
)

export default Map
