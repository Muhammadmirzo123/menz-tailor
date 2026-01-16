import React from "react";
import "./footer.css";
import img9 from "../../assets/img9.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-back">
        <img src={img9} alt="" />
      </div>
      <div className="footer-afore">
        <div className="footer-top">
          <h1>The joy of dressing is an art</h1>
        </div>
        <div className="footer-middle">
          <div className="footer-contrast">
            <h2>Contrast</h2>
            <p>
              71 Madison Ave 10013 New York, 914-309701, 914-329211,
              reservations@laurent.com, office@laurent.com
            </p>
          </div>
          <div className="footer-links">
            <h2>Links</h2>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">History</a>
            <a href="/">Contrast</a>
          </div>
          <div className="footer-social">
            <h2>Social</h2>
            <div className="icoon">
              <FaFacebookF />
              <FaTwitter />
              <FaGlobe />
            </div>
          </div>
        </div>
        <h4>
          Copyright ©2025 All rights reserved | This template is made with by
          Colorlib
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
