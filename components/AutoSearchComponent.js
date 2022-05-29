import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'

export default function AutoSearchComponent({ setLocation }) {
   const [autoCom, setAutoCom] = useState()

   const onLoad = (autocomplete) => {
      setAutoCom(autocomplete)
   }

   const onPlaceChanged = () => {
      if (autoCom) {
         const place = autoCom.getPlace();
         const lat = place.geometry.location.lat();
         const lon = place.geometry.location.lng();
         setLocation({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() })
         console.log('Get place', lat, lon)
      } else {
         console.log('Autocomplete is not loaded yet!')
      }
   }
   return (
      < Autocomplete
         onLoad={onLoad}
         onPlaceChanged={onPlaceChanged}
         options={{
            types: ["establishment"],
            componentRestrictions: { country: "ca" },
         }}
      >
         <input className="form-control me-2" type="search" placeholder="Search places" aria-label="Search" />
      </Autocomplete >
   )
}

{/*<Autocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            style={{ width: "90%" }}
            onPlaceSelected={(place) => {
                console.log(place);
            }}
            options={{
                types: ["(regions)"],
                componentRestrictions: { country: "ca" },
            }}
            libraries={["places"]}
/>*/}
