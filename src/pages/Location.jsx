import React, { useState, useEffect } from "react";
import locationSocket from "../utils/socket";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Location = (props) => {
  const [location, setlocation] = useState({
    lat: 0, // Example latitude
    lng: 0,
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAt0mo1ascW_9UcGp0a2pDTfiSzFAKq9Mg",
  });

  const objectLocation = {
    lat: 37.7749, // Example latitude
    lng: -122.4194, // Example longitude
  };

  useEffect(() => {
    locationSocket.on("location_update", (data) => {
      console.log(data);

      const newLocation = {
        lat: data.latitude,
        lng: data.longitude,
      };
      setlocation(newLocation);
    });
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100vh " }}
      center={location}
      zoom={18}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker position={location} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Location;
