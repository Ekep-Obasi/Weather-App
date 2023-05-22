import React from "react";
import image from "../../../assets/images/Cloud-background.png";
import shower from "../../../assets/images/Shower.png";
import { MdLocationPin, MdOutlineMyLocation } from "react-icons/md";
import { getCurrentDate } from "../../../utlils/date";
import { SidebarWrapper } from "./sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="header">
        <input type="search" placeholder="search for places" />
        <button>
          <MdOutlineMyLocation />
        </button>
      </div>

      <div className="image_wrapper">
        <img className="main__image" src={shower} alt="shower" />
        <img src={image} alt="clouds" />
        <div className="overlay"></div>
      </div>

      <p>
        15
        <span>&deg;C</span>
      </p>
      <p className="info">Shower</p>

      <div className="date">
        <span>Today</span>
        <span> &#183;</span>
        <span>{getCurrentDate()}</span>
      </div>

      <div className="location">
        <span className="icons">
          <MdLocationPin />
        </span>
        <span>Helsinki</span>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
