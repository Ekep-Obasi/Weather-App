/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { AppContext } from "../../../context/app";
import "./GoogleMaps.css";
import Search from "../autoCompleteSearch/Search";

const Map = () => {
  const { location } = useContext(AppContext);
  return (
    <>
      <Search />
      <GoogleMap
        zoom={15}
        center={location}
        mapTypeId="hybrid"
        mapContainerStyle={{
          width: "320px",
          height: "100%",
        }}
      >
        {location && <MarkerF position={location} />}
      </GoogleMap>
    </>
  );
};

const GoogleMapWrapper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  if (!isLoaded) return <p>Loading...</p>;
  return <Map />;
};

export default GoogleMapWrapper;
