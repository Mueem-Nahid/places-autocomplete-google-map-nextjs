import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
   height: '80vh',
};

export default function MapComponent({ location, setValue }) {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => setIsMounted(true), []);

   const onMarkerDragEnd = (e) => {
      getReverseGeocodingData(e.latLng.lat(), e.latLng.lng())
   }

   const getReverseGeocodingData = (lat, lng) => {
      var latlng = new google.maps.LatLng(lat, lng);
      // This is making the Geocode request
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'latLng': latlng }, (results, status) => {
         if (status !== google.maps.GeocoderStatus.OK) {
            console.log('Error')
         }
         // This is checking to see if the Geoeode Status is OK before proceeding
         if (status == google.maps.GeocoderStatus.OK) {
            let address = (results[0].formatted_address);
            setValue(address)
            console.log("Address: ", address)
         }
      });
   }

   return (
      <GoogleMap
         id="google-map"
         mapContainerStyle={containerStyle}
         center={location}
         zoom={11}
      >
         {isMounted && <Marker
            draggable={true}
            onDragEnd={onMarkerDragEnd}
            position={location}
         />}
      </GoogleMap>
   )
}
