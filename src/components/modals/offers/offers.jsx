import React from 'react'
import "./offers.css"


function offers({ image, details, setofferModalNumber, setPackageDetails,offerType }) {
  const getOffer = () => {
    setofferModalNumber(0)
    setPackageDetails(offerType)
  }
  return (
    <div className='offers-modal'>
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={()=>setofferModalNumber(0)}>X</div>
          <div className="title">offers<div className='section-border'><div></div><div></div><div></div></div></div>
          <div className="offers-modal-wrapper">
            <div className="left">
              <img className='image-fluid' src={image} alt="natural surf shop" />
            </div>
            <div className="right">
              <div className="details">
                <p>{details}</p>
                <button onClick={getOffer}>Book Now <i className="fa-sharp fa-solid fa-arrow-right"></i></button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default offers