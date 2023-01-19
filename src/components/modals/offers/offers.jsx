import React from 'react'
import "./offers.css"


function offers({ image, details, setdetails,setofferModalNumber, setPackageDetails,offerType ,setorderDetails,offerPackage}) {
  const getOffer = () => {
      setofferModalNumber(0)
    if (offerType === "jetcar") {
      setPackageDetails(offerType)
    }
    else {
      setorderDetails({ packageType: offerPackage, type: offerType })
      setdetails({ process: "dateInfo" })
    }
  }
  return (
    <div className='offers-modal'>
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={()=>setofferModalNumber(0)}>X</div>
          <div className="title">offers<div className='section-border'><div></div><div></div><div></div></div></div>
          <div className="offers-modal-wrapper">
            <div className="left">
              <img className='image-fluid' src={image} alt="waves surf shop" />
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