/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { AppContext } from "../../../context/app";
import "./GoogleMaps.css";
import Search from "../autoCompleteSearch/Search";

const Map = () => {
  const { dailyWeather, selected, setSelected } = useContext(AppContext);

  useMemo(
    () => setSelected({ lat: dailyWeather?.lat, lng: dailyWeather?.lon }),
    [dailyWeather]
  );

  return (
    <>
      <Search setSelected={setSelected} />
      <GoogleMap
        zoom={10}
        center={selected}
        mapContainerStyle={{
          width: "320px",
          height: "100%",
        }}
      >
        {selected && <MarkerF position={selected} />}
      </GoogleMap>
    </>
  );
};

const GoogleMapWrapper = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4DXam-i6LPD0F8Oku1bjup-tQeWoAxpY",
    libraries: ["places"],
  });
  if (!isLoaded) return <p>Loading...</p>;
  return <Map />;
};

export default GoogleMapWrapper;
