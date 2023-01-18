import React from 'react'
import "./card.css"

function card({title,image ,offerNumber , setofferModalNumber}) {
  return (
    <div className='offer-card' data-aos="fade-up">
      <img src={image} alt="fox sports app customer service" />
      <p>{title}</p>
      <button onClick={()=>setofferModalNumber(offerNumber)}>Book Now <i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default card