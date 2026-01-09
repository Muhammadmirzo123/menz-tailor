import React from "react";
import "./location.css";
import img8 from "../../assets/img8.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-first">
        <div className="location-text">
          <h1>Our Location</h1>
          <h2>Visit Our Tailor</h2>
        </div>
        <div className="location-address">
          <p>
            71 Madison Ave 10013 New York, 914-309701, 914-329211,
            reservations@laurent.com, office@laurent.com
          </p>
        </div>
        <div className="location-time">
          <span>Opening hours:</span>
          <p>Mon – Thu: 10.00 am – 01:00 am</p>
          <p>Fri – Sun: 10:00 am – 02:00 am</p>
        </div>
        <div className="location-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaGlobe />
        </div>
      </div>
      <div className="location-second">
        <img src={img8} alt="" />
      </div>
    </div>
  );
};

export default Location;
