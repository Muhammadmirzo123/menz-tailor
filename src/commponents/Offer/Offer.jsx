import React from "react";
import "./offer.css";
import img4 from "../../assets/img4.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-top">
        <h1>What We Offer</h1>
        <p>What we offer of Clients</p>
      </div>

      <div className="offer-bottom">
        <div className="offer-cards">
          <div className="img">
            <img src={img4} alt="" />
          </div>

          <div className="title">
            <div className="title-number">1</div>
            <h2>Perfect Body Measurements</h2>
          </div>

          <p>
            Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
            eiusmod tecsmpor
          </p>

          <FaArrowRightLong className="offer-arrow" />
        </div>

        <div className="offer-cards">
          <div className="img">
            <img src={img2} alt="" />
          </div>

          <div className="title">
            <div className="title-number">2</div>
            <h2>Perfect Body Measurements</h2>
          </div>

          <p>
            Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
            eiusmod tecsmpor
          </p>

          <FaArrowRightLong className="offer-arrow" />
        </div>

        <div className="offer-cards">
          <div className="img">
            <img src={img3} alt="" />
          </div>

          <div className="title">
            <div className="title-number">3</div>
            <h2>Perfect Body Measurements</h2>
          </div>

          <p>
            Aorem Epsum Solor sit amet, consectetur adipiscing elited dsfo
            eiusmod tecsmpor
          </p>

          <FaArrowRightLong className="offer-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
