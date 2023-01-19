import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

import "./calender.css"

function Calender({ orderDetails, setorderDetails, setdetails, details }) {
  const [value, setValue] = useState();
  const [error, seterror] = useState("")

  const Back = () => {
    setdetails({details:{...details} , process:"packageDetails"})
  }

  const Next = () => {
    if (orderDetails.date) {
      if (!isNaN(value?.$d?.valueOf())) {
        setdetails({...details , process:"userInfo"})
      }
      else {
        seterror("Please choose a suitable date")
      }
    }
    else {
      seterror("Please Choose a date")
    }
  }
    const Exit = () => {
    setorderDetails({})
    setdetails({ process: '' })
  }
  return (
    <div className="calender-model">
      <div className="layout">
        <div className="modal-card">
          <div className="exit" onClick={Exit}>x</div>
        <span>Choose a suitable date</span>
        <LocalizationProvider dateAdapter={AdapterDayjs} className={"calender"}>
          <DateTimePicker
            className="datePicker"
            renderInput={(params) => <TextField {...params} />}
            value={value}
              onChange={(newValue) => {
                setorderDetails({ ...orderDetails, date: newValue.$d.toLocaleString("en-US") })
                setValue(newValue)
            }}
            minDate={dayjs(new Date())}
          />
          </LocalizationProvider>
          {details.details&&<div className="back" onClick={Back}>Back</div>}
          <div className="next" onClick={Next}>Next</div>
          <span className="error">{ error}</span>
        </div>
      </div>
    </div>
  );
}

export default Calender;
