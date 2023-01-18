import React, { useState } from 'react'
import "./packeges.css"

import Card from "../cards/card"
import "../offers/offer.css"

import OfferModal from "../modals/offers/offers"

import PackageDetails from "../modals/packageDetails/PakageDetails"
import { packageDetails } from "../data/data"
import Calender from '../modals/calender/calender'
import UserInfo from '../modals/userInfo/UserInfo'
import Payment from "../modals/payment/Payment"

function Packeges() {
  const [offerModalNumber, setofferModalNumber] = useState(0)
  const [details, setdetails] = useState({})
  const [orderDetails, setorderDetails] = useState({})
  
  const setPackageDetails = (type) => {
    setdetails({details:packageDetails[type], process:"packageDetails"})
  }


  return (
    <>
      <section className='offers'>
      <div className="title">
        offers
        <div className='section-border'><div></div><div></div><div></div></div>
      </div>
      
      <div className='offers_cards-wrapper'>
      <Card title={"30 minutes of free jetski"} image={require('../assets/images/offers/3.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={1} />
      <Card title={"15 minutes for free "} image={ require('../assets/images/offers/1.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={2}/>
      <Card title={"15% discount on JetCar"} image={require('../assets/images/offers/2.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={3}/>
        
    {offerModalNumber === 1 && <OfferModal setorderDetails={setorderDetails} offerType=" DADDY BIG 90FT yacht" offerPackage="4 Beedrooms 65 Guest 1500" setdetails={setdetails} setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/3.webp")} details={"When booking a DADDY BIG 90FT yacht, use the Jetski for 30 minutes for free"} />}
      {offerModalNumber === 2 && <OfferModal  setorderDetails={setorderDetails} offerType="jetski ride- YamahaVXR Cruiser 1800CC" offerPackage="30 Min 1or2 Person 450" setdetails={setdetails}  setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/1.webp")} details={"When booking 30 minutes for JetSki, the duration will be increased by 15 minutes for free"}/>}
      { offerModalNumber=== 3 && <OfferModal setPackageDetails={setPackageDetails} offerType="jetcar" offerPackage="" setdetails={setdetails}  setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/2.webp")} details={"If the group has more than 3 people, a 15% discount will be applied."}/>}
      </div>
    </section>
    <section id='Packeges' className='packeges'>
      <div className="title">
        packeges<div className='section-border'><div></div><div></div><div></div></div>
      </div>
      <div className="packeges_cards-wrapper">
        <div className="packege-card" data-aos="fade-right">
          <img src={require('../assets/images/packages/1.webp')} alt="car jetski in dubai" />
          <div className="packege_card-title">jetcar</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>20 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>900 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>1 or 3 Person</span></div>
          </div>
          <span className='package-button'  onClick={()=>setPackageDetails("jetcar")} >Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-up">
          <img src={require('../assets/images/packages/2.webp')} alt="flying fox water sports" />
          <div className="packege_card-title">Fly Board</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>30 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>900 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>1 Persons</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("flyBoard")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-up">
          <img src={require('../assets/images/packages/3.webp')} alt="performance jetski in dubai" />
          <div className="packege_card-title">Yacht</div>
          <div className="packege_card-info">
            <div className='bedroom'><i className="fa-solid fa-ship"></i><span> 1 Bedroom</span></div>
            <div ><i className="fa-solid fa-money-bill"></i><span>500 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>12 Guests</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("Yacht")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-left">
          <img src={require('../assets/images/packages/4.webp')} alt="where to do jetski in dubai" />
          <div className="packege_card-title">Banana Boat</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>30 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>450 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>5 Persons</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("bananaBoat")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-right">
          <img src={require('../assets/images/packages/5.webp')} alt="best jet ski dubai" />
          <div className="packege_card-title">Speed boat</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>1 Hour</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>350 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>8 Persons</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("speedBoat")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-up">
          <img src={require('../assets/images/packages/6.webp')} alt="jetski for sale in dubai" />
          <div className="packege_card-title">Parasailing</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>15 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>400 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>1 Person</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("parasailing")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-up">
          <img src={require('../assets/images/packages/7.webp')} alt="jetski rental in dubai" />
          <div className="packege_card-title">jetski</div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>30 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>400 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>1 or 2 Person</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("jetski")}>Book Now</span>
        </div>
        <div className="packege-card" data-aos="fade-left">
          <img src={require('../assets/images/packages/8.webp')} alt="jet ski crash dubai" />
          <div className="packege_card-title">Donut </div>
          <div className="packege_card-info">
            <div><i className="fa-regular fa-clock"></i><span>30 Min</span></div>
            <div><i className="fa-solid fa-money-bill"></i><span>450 AED</span></div>
            <div style={{width:"100%"}}><i className="fa-solid fa-user"></i><span>5 Persons</span></div>
          </div>
          <span className='package-button' onClick={()=>setPackageDetails("Donut")}>Book Now</span>
        </div>
      </div>
      <div className="packeges-details">
        <div className="left">
          <img src={require("../assets/images/packages/main.webp")} alt="cheap jet ski dubai" />
        </div>
        <div className="right">
          <div className="packeges-details-info">
            <div>
              A must try water sports and flyboard in Dubai
            </div>
            <p>
              We guarantee you abetter vacation with skiing and riding a jetski,jetcar and banana boat in FoxWaterSport.Do not miss the opportunity to try jetski,jetcar and banana boat in FoxWaterSport and take a wonderful picture with your favourite people for a beautiful memory for free.
            </p>
          </div>
        </div>
      </div>
      <div className="owl-carousel packeges-carousel">
        <div className='packeges-carousel-item'><img src={require("../assets/images/Gallay/WhatsApp-Image-2021-11-22-at-23.59 (2).webp")} alt="flying fox water sports" /></div>
        <div className='packeges-carousel-item'><img src={require("../assets/images/Gallay/flyboard-img-1.webp")} alt="car jetski in dubai" /></div>
        <div className='packeges-carousel-item'><img src={require("../assets/images/Gallay/donut-ride_2.webp")} alt="car jetski in dubai" /></div>
        <div className='packeges-carousel-item'><img src={require("../assets/images/Gallay/Cruising-Thumb 4.webp")} alt="flying fox water sports" /></div>
        <div className='packeges-carousel-item'><img src={require("../assets/images/Gallay/WhatsApp-Image-2021-11-22-at-23.59 (1).webp")} alt="car jetski in dubai" /></div>
      </div>
        
      {details.process === "packageDetails" && <PackageDetails details={details.details} setdetails={setdetails} setorderDetails={setorderDetails} orderDetails={orderDetails} />}
      {details.process === "dateInfo" && <Calender details={details} orderDetails={orderDetails} setorderDetails={setorderDetails} setdetails={setdetails} />}
      {details.process === "userInfo" && <UserInfo  details={details} orderDetails={orderDetails} setorderDetails={setorderDetails} setdetails={setdetails} />}
      {details.process === "paymentMethod" && <Payment orderDetails={orderDetails} setorderDetails={setorderDetails} setdetails={setdetails} />}
      </section>
      </>
  )
}

export default Packeges