import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC801jQ_SjUXct93sEcIYjxeqiPQbbNAF8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={{ lat: 30, lng: 69 }}>
    {props.countryData && props.countryData.map(country => (
      <Marker
        options={{icon: 'http://covid19-trackerapp-abubaker-pcbc2020.surge.sh/coronavirus-icon.png'}}
        key={country.country}
        position={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}

        >
          <InfoWindow>
            <div>
              <div><img src={country.countryInfo.flag} alt="flag" width={20} /></div>
              <div >{ country.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
            </div>
          </InfoWindow>
      </Marker>
    )
    )}
  </GoogleMap>
));

export default MyMapComponent