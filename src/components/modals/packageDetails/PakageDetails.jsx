import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


import "./packageDetails.css"

function PakageDetails({ details, setdetails, orderDetails, setorderDetails }) {
  useEffect(() => {
    if (orderDetails.packageType) {
      setorderDetails({})
    }
  },[details])
  const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      dots: false,
      responsive: [
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
  };
  const [errorMessage, seterrorMessage] = useState("")
  const addPackageDetails = (e) => {
    Array.from(document.querySelectorAll(".type-card")).map((el)=>el.querySelector(".active")?.classList.remove("active"))
    e.target.classList.add("active")
    setorderDetails({ ...orderDetails, packageType: e.target.innerText , type:e.target.parentElement.parentElement.querySelector(".type")?.innerText})
  }

  const Next = () => {
    if (orderDetails.packageType) {
      setdetails({ process: 'dateInfo' })
    }
    else {
      seterrorMessage("Please Add the package details")
    }
  }
  return (
    <div className='package-details'>
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={() => setdetails({ process: '' })}>x</div>
          <div className="card-wrapper">
            {/* <img src={details.details.image} alt="" /> */}
            {/* <div className="info">
              <div className="title">
                {details.details.title}
              </div>
              <p>
                {details.details.desc}
              </p>
            </div> */}
            {details.details.types.length> 1?
            (<Slider {...settings} className="types">
                {
                  details.details.types.map((type) => (
                    <div key={type.type} className="type-card">
                      <img src={type.image} alt="" />
                      <div className='type'>{type.type}</div>
                      <div className="details-wrapper">
                        {type.details.map((detail) => (
                          <div  onClick={addPackageDetails} key={detail}>{detail}</div>
                        ))}
                      </div>
                    </div>
                  )
                  )
                }
              </Slider>)
              : <div className="types">
                {
                  details.details.types.map((type) => (
                    <div key={type.type} className="type-card">
                      <img src={type.image} alt="" />
                      <div className='type'>{type.type}</div>
                      <div className="details-wrapper">
                        {type.details.map((detail) => (
                          <div onClick={addPackageDetails} key={detail}>{detail}</div>
                        ))}
                      </div>
                    </div>
                  )
                  )
                }
              </div> }
            <div className="services">
              <div className='ads'>Add-on Services</div>
              <div className='break' />
              <div className="image-wrapper">
                <div className="image-item">
                  <img src={require("../../assets/images/packageDetails/services 3.jpg") } alt="" />
                  <span>Photography</span>
                </div>
                <div className="image-item">
                  <img src={require("../../assets/images/packageDetails/services 2.jpg") } alt="" />
                  <span>Birthday cake</span>
                </div>
                <div className="image-item">
                  <img src={require("../../assets/images/packageDetails/services 1.jpg") } alt="" />
                  <span>Pickup & Drop</span>
                </div>
              </div>
            </div>
            <button className='next' onClick={Next}>Next <i className="fa-solid fa-arrow-right"></i></button>
            <div className='error'>{ errorMessage}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PakageDetails