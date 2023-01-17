import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

import "./calender.css"

function Calender({orderDetails ,setorderDetails ,setdetails}) {
  const [value, setValue] = useState(new Date());
  const [error, seterror] = useState("")



  const Next = () => {
    if (orderDetails.date) {
      setdetails({ process: "userInfo" })
    }
    else {
      seterror("Please Choose a date")
    }
  }
  return (
    <div className="calender-model">
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={() => setdetails({ process: '' })}>x</div>
        <span>Choose a suitable date</span>
        <LocalizationProvider dateAdapter={AdapterDayjs} className={"calender"}>
          <DateTimePicker
            className="datePicker"
            renderInput={(params) => <TextField {...params} />}
            value={value}
              onChange={(newValue) => {
              setorderDetails({...orderDetails , date:newValue.$d.toLocaleString("en-US")})
            }}
            minDate={dayjs(new Date())}
          />
          </LocalizationProvider>
          <div className="next" onClick={Next}>Next</div>
          <span className="error">{ error}</span>
        </div>
      </div>
    </div>
  );
}

export default Calender;
