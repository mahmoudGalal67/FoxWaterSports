import React, { useState } from 'react'
import "./payment.css"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { Oval } from  'react-loader-spinner'

function Payment({ orderDetails, setorderDetails, setdetails }) {
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  const Finish = () => {
    if (orderDetails.paymentMethod) {
    setloading(true)
    emailjs.send("service_bt6v5zf", "template_zimodm7", orderDetails ,"zRkube-DctvxJMZFZ").then((res) => { 
            toast.success('Booking Confirmed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      setloading(false)
      setdetails({ process: '' })})
  }
    else {
      seterror("Please Choose a payment method")
    }
  }
  const setPayment = (e) => {
    e.target.parentElement.parentElement.querySelector(".active")?.classList.remove("active")
    e.target.classList.add("active")
    const paymentValue=e.target.innerText
    setorderDetails({...orderDetails , paymentMethod:paymentValue})
  }
  const applyCobon = (e) => {
    setorderDetails({...orderDetails ,cobon:e.target.parentElement.querySelector(".cobonText").value})
  }  
  return (
    <div className="payment">
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={() => setdetails({ process: '' })}>x</div>
          <div className="your-payment">
            Your Payment
          </div>
          <p>You can either pay online using your Debit/ Credit card or PayPal.</p>
          <div className="payment-method">
            <div className="payment-card" >
              <div className="payment-icon" >
                <img src={require("../../assets/images/payment/percentage.png")} alt="" />
                <div className='payment'>Total AED</div>
              </div>
              <div className='type' onClick={setPayment}>Full Amount</div>
            </div>
            <div className="payment-card"  >
              <div className="payment-icon" >
                <img src={require("../../assets/images/payment/development.png")} alt="" />
                <div className='payment'>Deposit Amount 100 AED</div>
              </div>
              <div className='type' onClick={setPayment}>Deposit Only</div>
            </div>
            {/* <div className="payment-card">
              <div className="payment-icon">
                <img src={require("../../assets/images/payment/money 1.png")} alt="" />
                <div>Pay cash</div>
              </div>
              <div>Pay cash</div>
            </div> */}
          </div>
            <div className="cobon">
              <div>Do you have a Coupon Code?</div>
              <div className="cobon-form">
                <img src={require("../../assets/images/payment/Vector.png")} alt="" />
                <input className='cobonText' type="text" placeholder='Cobon' />
                <button onClick={applyCobon}>Apply</button>
              </div>
            </div>
          <button className="next" onClick={Finish}>Next</button>
          <div className="error">{ error}</div>
        </div>
      </div>
      {loading && <div className="loading"><Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={5}
        strokeWidthSecondary={2}

      /></div>}
    </div>
  )
}

export default Payment