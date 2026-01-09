import React from "react";
import "./history.css";
import img5 from "../../assets/img5.png";

const History = () => {
  return (
    <div className="history-container">
      <div className="history-left">
        <img src={img5} alt="" />
      </div>
      <div className="history-right">
        <h1>Our History</h1>
        <p>
          Duis aute irure dolor inasfa reprehenderit in voluptate velit esse
          cillum reeut cupidatatfugiat nulla pariatur. Excepteur sintxsdfas
          occaecat, cupidatat non proidente sunt in culpa qui officia deserunt,
          mollit anim id est laborum. Sedut des perspiciatis unde omnis iste.
        </p>
        <button>
          <a href="/">About Us</a>
        </button>
      </div>
    </div>
  );
};

export default History;
