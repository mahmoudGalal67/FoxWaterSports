import React, { useState } from 'react'
import "./userInfo.css"

function UserInfo({orderDetails ,setorderDetails ,setdetails}) {
  
  const [error, seterror] = useState("")
  const Next = () => {
    if (orderDetails.FullName && orderDetails.Email &&orderDetails.PhoneNumber) {
      setdetails({ process: "paymentMethod" })
    }
    else {
      seterror("Please add all your information")
    }
  }
  return (
    <div className="user-info">
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={() => setdetails({ process: '' })}>x</div>
          <div className="form-info">
          <div>Please provide you contact details so we can send you a confirmation and other contact info</div>
          <span>Full Name</span>
            <input type="text" name="FullName" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})} />
          <span>Email</span>
          <input type="email" name="Email" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})}/>
          <span>Phone Number</span>
            <input type="number" name="PhoneNumber" onChange={(e) => setorderDetails({...orderDetails,[e.target.name]:e.target.value})}/>
          </div>
          <button className='next' onClick={Next}>Next <i className="fa-solid fa-arrow-right"></i></button>
          <div className="error">{error}</div>
        </div>
      </div>
      </div>
  )
}

export default UserInfo