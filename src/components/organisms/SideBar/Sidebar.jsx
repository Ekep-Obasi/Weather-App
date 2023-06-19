import React, { useContext, useState } from "react";
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import { SidebarWrapper, StyledOpenDrawer } from "./sidebar.styles";
import { SideBarContext, SideBarProvider } from "./sidebarcontext";
import { AppContext } from "../../../context/app";
import convertTemperature from "../../../utlils/convertTemp";
import GoogleMapWrapper from "../../molecules/GoogleMap/GoogleMap";
import Search from "../../molecules/autoCompleteSearch/Search";

const ClosedDrawer = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { dailyWeather } = useContext(AppContext);

  return (
    <SidebarWrapper state={isOpen}>
      <div className="header">
        <Search />
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <MdOutlineMyLocation />
        </button>
      </div>

      <div className="image_wrapper">
        <img
          src={`http://openweathermap.org/img/w/${dailyWeather?.weather?.icon}.png`}
          alt="shower"
        />
      </div>

      <div className="weather_info">
        <p>
          {convertTemperature("fahrenheit", dailyWeather?.temp) || ""}
          <span>&deg;C</span>
        </p>
        <p className="info">{dailyWeather?.weather?.main}</p>

        <div className="date">
          <span>Today</span>
          <span> &#183;</span>
          <span>
            {new Intl.DateTimeFormat("default", { dateStyle: "medium" }).format(
              new Date()
            )}
          </span>
        </div>

        <div className="location">
          <span className="icons">
            <MdLocationPin />
          </span>
          <span>{dailyWeather?.name}</span>
        </div>
      </div>
    </SidebarWrapper>
  );
};

const OpenDrawer = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  return (
    <StyledOpenDrawer state={isOpen}>
      <div className="close-button">
        <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
          &times;
        </button>
      </div>
      <GoogleMapWrapper />
    </StyledOpenDrawer>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <SideBarProvider value={{ isOpen, setIsOpen }}>
        <ClosedDrawer />
        <OpenDrawer />
      </SideBarProvider>
    </>
  );
};

export default Sidebar;
