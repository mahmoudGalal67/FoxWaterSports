import React, { useState } from 'react'
import "./userInfo.css"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { Oval } from  'react-loader-spinner'


function UserInfo({orderDetails ,setorderDetails ,setdetails}) {
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")
  const Next = () => {
    if (orderDetails.FullName && orderDetails.Email && orderDetails.PhoneNumber) {
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
      // setdetails({ process: "paymentMethod" })
    }
    else {
      seterror("Please add all your information")
    }
  }
    const Exit = () => {
    setorderDetails({})
    setdetails({ process: '' })
  }
  const Back = () => {
    setdetails({ process: 'dateInfo' })
  }
  return (
    <div className="user-info">
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={Exit}>x</div>
          <div className="form-info">
          <div>Please provide you contact details so we can send you a confirmation and other contact info</div>
          <span>Full Name</span>
            <input type="text" name="FullName" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})} />
          <span>Email</span>
          <input type="email" name="Email" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})}/>
          <span>Phone Number</span>
            <input type="number" name="PhoneNumber" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})}/>
          </div>
          <div className='back' onClick={Back}>Back</div>
          <button className='next' onClick={Next}>Finsh <i className="fa-solid fa-arrow-right"></i></button>
          <div className="error">{error}</div>
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

export default UserInfo