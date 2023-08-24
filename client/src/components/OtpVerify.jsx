import React, { useEffect, useState } from "react";
import "./css/otpVerify.css";
import { useDispatch } from "react-redux";
import { register } from "../redux/authUser/authSlice";

function OtpVerify() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(email));
  };

  useEffect(() => {}, []);
  return (
    <div className="OtpVerify">
      <form onSubmit={onSubmit} className="form">
        <p id="heading">Send OTP</p>
        <div className="field">
          @
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <button className="button1">SEND OTP</button>
      </form>
    </div>
  );
}

export default OtpVerify;
