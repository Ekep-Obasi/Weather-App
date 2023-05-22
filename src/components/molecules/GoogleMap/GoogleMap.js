import React, { useContext, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { AppContext } from "../../../context/app";
import "./GoogleMaps.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxButton,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const Map = () => {
  const { dailyWeather } = useContext(AppContext);
  const [selected, setSelected] = useState(null);

  useMemo(
    () => setSelected({ lat: dailyWeather?.lat, lng: dailyWeather?.lon }),
    [dailyWeather]
  );

  const containerStyle = {
    width: "320px",
    height: "100%",
  };

  return (
    <>
      <PlacesAutoComplete setSelected={setSelected} />
      <GoogleMap zoom={10} center={selected} mapContainerStyle={containerStyle}>
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

const PlacesAutoComplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const result = await getGeocode({ address });
    const { lat, lng } = await getLatLng(result[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect} className="search-area">
      <ComboboxInput
        placeholder="search Location"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
      />
      <ComboboxButton value="Search" className="button" />
      <ComboboxPopover id="select" style={{ zIndex: 2 }}>
        <ComboboxList>
          {status === "OK" &&
            data?.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default GoogleMapWrapper;
