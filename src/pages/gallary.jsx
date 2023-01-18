import React, { useState } from 'react'

import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import Nav from "../components/nav/Nav"
import Footer from '../components/footer/footer'

import "./gallary.css"

function Gallary() {
  const [FullName, setFullName] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [error, seterror] = useState('')
  const Support = (e) => {
    if (FullName && PhoneNumber) {
      emailjs.send("service_bt6v5zf", "template_f4fosul", {FullName , PhoneNumber}, "zRkube-DctvxJMZFZ").then((res) => {
        toast.success('We well contact you as soon as possible', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      seterror("")
    } else {
      seterror("Please add your FullName and PhoneNumber")
  }
}
  return (
      <div className='gallary'>
      <Nav />
      <div className="instgram-feed">
        <div class="elfsight-app-4ce9f40f-0708-48dc-b66e-e599971ca597"></div>
      </div>
      <div className="images">
        <div className="title">
          GALLERY<div className='section-border'><div></div><div></div><div></div></div>
        </div>
        <p>We are passionate about what we do, check out our latest news and follow us on social media!</p>
        <div className="images-wrapper">
          <img src={require("../components/assets/images/Gallay/Cruising-Thumb 4.webp")} alt="fox sports stream not working" />
          <img src={require("../components/assets/images/Gallay/donut-ride_2.webp")} alt="jet ski ride dubai" />
          <img src={require("../components/assets/images/Gallay/flyboard-img-1.webp")} alt="how watch fox sports" />
          <img src={require("../components/assets/images/Gallay/WhatsApp-Image-2021-11-22-at-23.59 (1).webp")} alt="fox sports stream not working" />
          <img src={require("../components/assets/images/Gallay/WhatsApp-Image-2021-11-22-at-23.59 (3).webp")} alt="how watch fox sports" />
          <img src={require("../components/assets/images/Gallay/WhatsApp-Image-2021-11-22-at-23.59 (4).webp")} alt="jet ski ride dubai" />
        </div>
        <div className="support">
          <div className="title">
            book your tour in dubai<div className='section-border'><div></div><div></div><div></div></div>
          </div>
          <div className="phone-number">
            <div>+971 54 557 4911</div>
            <p>foxwatersport.com</p>
          </div>
          <p>Call us or fill the below form and our team will conect you shortly</p>
          <div className="form-input">
            <div className="form-control">
              <label>Full Name</label>
              <input type="text" onChange={(e)=>setFullName(e.target.value)}/>
            </div>
            <div className="form-control">
              <label>Phone Number</label>
              <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>
          <button onClick={Support}>Send</button>
        </div>
        <div className='error'>{ error}</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallary