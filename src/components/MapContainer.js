import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer=({google, locations, locationID, selectLocation }) => 
{
    let selectedLocation=locations?.find(element => element.id.toString() === locationID.toString());

    return (  
        <Map
        google={google}
        zoom={11.5}
        initialCenter={{ lat: 48.183056266918335, lng: 11.561451811968304}} 
        center={{ lat: selectedLocation?.lat, lng: selectedLocation?.lng}}    
        > 
            {locations?.map(item =>
                <Marker  key={item.id} position={{ lat: item.lat, lng: item.lng}} onClick={()=>selectLocation("locationID", item.id)} />
           )}    
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);