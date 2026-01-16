import React, { useState } from "react";
import "./header.css";
import img1 from "../../assets/img1.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="logo">
          <img src={img1} alt="" />
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">History</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Pages</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <FaBars className="side-bar" onClick={() => setOpen(true)} />

        <button className="header-button">
          <h2>Visit Us</h2>
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <IoClose />
          </button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">History</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Pages</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <button>
              Visit Us
            </button>
          </li>
          <br />
        </ul>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </div>
  );
};

export default Header;
