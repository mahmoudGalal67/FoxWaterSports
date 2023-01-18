import React, { useState } from 'react'

import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import "./contact.css"

import Nav from "../components/nav/Nav"
import Footer from '../components/footer/footer'
import { useRef } from 'react';

function Contact() {
  const [userInfo, setuserInfo] = useState({})
  const [error, seterror] = useState("")
  const [play, setplay] = useState(false)
  const video = useRef()

  const playVideo = () => {
    setplay((prev)=>!prev)
    if(!play){
      video.current.play()
    }
    else {
      video.current.pause()
    }
  }

  const Send = () => {
    if (userInfo.name && userInfo.number && userInfo.email && userInfo.message) {
        emailjs.send("service_bt6v5zf", "template_f4fosul", userInfo, "zRkube-DctvxJMZFZ").then((res) => {
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
      seterror("Please add all information")
    }
  }
  return (
    <>
    <Nav />
    <div className="contact-us">
      <div className="contact-header">
        <img src={require("../components/assets/images/Contact us/jet-ski-alcudia-22207-o 1.png")} alt="fox sports email" />
        <div className="subHeader">
          CONTACT US
        </div>
      </div>
      <div className="form-contact">
        <div className="title">Send A Message</div>
          <div className="form-wrappper">
        <div className="left">
              <video
              ref={video}
              height="200px"
              width="100%"
              loop
              muted
              src={require("../components/assets/videos/(1).webm")}
              ></video>
              <div>
                {!play?<img onClick={playVideo} src={require("../components/assets/images/Contact us/Youtube.png")} alt="" />:<i onClick={playVideo} className="fa-regular fa-circle-pause"></i>}
              </div>
        </div>
        <div className="right">
          <div className="contact-info">
            You can contact us quickly by filling out this form
          </div>
          <div className="form-control">
            <label>name</label>
            <input name='name' type="text" onChange={(e)=>setuserInfo({...userInfo , [e.target.name]:e.target.value})}/>
            <label>number</label>
            <input type="text" name='number' onChange={(e)=>setuserInfo({...userInfo , [e.target.name]:e.target.value})}/>
            <label>E-mail</label>
            <input type="text" name='email' onChange={(e)=>setuserInfo({...userInfo , [e.target.name]:e.target.value})}/>
            <label >message</label>
                <textarea cols="30" rows="10" name='message' onChange={(e) => setuserInfo({ ...userInfo, [e.target.name]: e.target.value })}></textarea>
                <div className='error'>{ error}</div>
          </div>
          <button onClick={Send}>Send</button>
        </div>
          </div>
      </div>
      <div className="location">
        <div className="left">
          <div className="title">
            LOCATION<div className='section-border'><div></div><div></div><div></div></div>
          </div>
          <div className="icon"><img src={require("../components/assets/images/Contact us/Vector.png")} alt="" /> <span>Dubai Harbour</span></div>
          <p>Jumeirah 4, Umm Suquem 1, Al Fintaas Street Fishing Harbor Last Entrance Dubai, United Arab Emirates</p>
          <div className="wrapper">
            <div className="icon"><img src={require("../components/assets/images/Contact us/Vector (1).png")} alt="" /><div><div>+971 54 557 4911</div><div>+971 54 557 4911</div></div></div>
            <div className="icons">
              <img src={require("../components/assets/images/Contact us/Facebook.png")} alt="fox sports email" />
              <img src={require("../components/assets/images/Contact us/Instagram.png")} alt="fox sports email" />
              <img src={require("../components/assets/images/Contact us/Icon_6_.png")} alt="fox sports email" />
            </div>
          </div>
            <div className="QR-image">
            <div>OR</div>
            <img src={require("../components/assets/images/Contact us/index5 1.png")} alt="fox sports email" />
          </div>
        </div>
        <div className="right">
          <iframe src="https://maps.google.com/maps?q=Fox%20Watersport,%20Dubai%20Harbour%20-%20Dubai%20-%20United%20Arab%20Emirates&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" title='Foxwatersports' style={{ border: "0" ,width:"100%" , height:"100%"}} allowFullScreen></iframe>
        </div>
      </div>
    </div>
  <Footer/>
  </>
  )
}

export default Contact