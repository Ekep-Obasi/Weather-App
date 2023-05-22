import React, { useContext, useState } from "react";
import image from "../../../assets/images/Cloud-background.png";
import shower from "../../../assets/images/Shower.png";
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import { getCurrentDate } from "../../../utlils/date";
import { SidebarWrapper, StyledOpenDrawer } from "./sidebar.styles";
import { SideBarContext, SideBarProvider } from "./sidebarcontext";
import { AppContext } from "../../../context/app";
import convertTemperature from "../../../utlils/convertTemp";
import GoogleMapWrapper from "../../molecules/GoogleMap/GoogleMap";
import Search from "../../molecules/autoCompleteSearch/Search";

const ClosedDrawer = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { dailyWeather, setSelected } = useContext(AppContext);

  return (
    <SidebarWrapper state={isOpen}>
      <div className="header">
        <Search setSelected={setSelected} />
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <MdOutlineMyLocation />
        </button>
      </div>

      <div className="image_wrapper">
        <img className="main__image" src={shower} alt="shower" />
        <img src={image} alt="clouds" />
        <div className="overlay"></div>
      </div>

      <p>
        {convertTemperature("fahrenheit", dailyWeather?.temp)}
        <span>&deg;C</span>
      </p>
      <p className="info">{dailyWeather?.weather?.main}</p>

      <div className="date">
        <span>Today</span>
        <span> &#183;</span>
        <span>{getCurrentDate()}</span>
      </div>

      <div className="location">
        <span className="icons">
          <MdLocationPin />
        </span>
        <span>{dailyWeather?.name}</span>
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
