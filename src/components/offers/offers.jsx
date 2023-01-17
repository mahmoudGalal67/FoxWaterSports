import React, { useState } from 'react'
import Card from "../cards/card"
import "./offer.css"

import OfferModal from "../modals/offers/offers"

function  Offers() {
  const [offerModalNumber, setofferModalNumber] = useState(0)

  return (
    <section className='offers'>
      <div className="title">
        offers
        <div className='section-border'><div></div><div></div><div></div></div>
      </div>
      
      <div className='offers_cards-wrapper'>
      <Card title={"30 minutes of free jetski"} image={require('../assets/images/offers/3.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={1} />
      <Card title={"15 minutes for free "} image={ require('../assets/images/offers/1.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={2}/>
      <Card title={"15% discount on JetCar"} image={require('../assets/images/offers/2.webp')} setofferModalNumber={ setofferModalNumber} offerNumber={3}/>
        
      {offerModalNumber === 1 && <OfferModal setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/3.webp")} details={"When booking a DADDY BIG 90FT yacht, use the Jetski for 30 minutes for free"} />}
      {offerModalNumber === 2 && <OfferModal setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/1.webp")} details={"When booking 30 minutes for JetSki, the duration will be increased by 15 minutes for free"}/>}
      { offerModalNumber=== 3 && <OfferModal  setofferModalNumber={ setofferModalNumber} image={require("../assets/images/offers/2.webp")} details={"If the group has more than 3 people, a 15% discount will be applied."}/>}
      </div>
    </section>
  )
}

export default Offers 