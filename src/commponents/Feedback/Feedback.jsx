import React from 'react'
import "./feedback.css"
import img7 from "../../assets/img7.png"

const Feedback = () => {
  return (
    <div className='feedback-container'>
      <div className="feedback-first">
          <h2>Client Feedback</h2>
          <h1>Our Work For Clients</h1>
      </div>
      <div className="feedback-second">
        <img src={img7} alt="" />
      </div>
      <div className="feedback-third">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
      </div>
    </div>
  )
}

export default Feedback
