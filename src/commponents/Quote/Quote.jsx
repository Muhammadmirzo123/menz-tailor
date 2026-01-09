import React from "react";
import "./quote.css";
import img6 from "../../assets/img6.png"

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-center">
        <img src={img6} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam autem
          vero praesentium earum eligendi ipsum voluptatem, minima recusandae
          nihil sed accusamus officia numquam. Atque, quia est similique dolore
          deleniti aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Quote;
