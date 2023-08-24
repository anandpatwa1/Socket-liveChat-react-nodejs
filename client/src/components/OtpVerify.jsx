import React from "react";
import "./css/otpVerify.css";

function OtpVerify() {
  return (
    <div className="OtpVerify">
      <form className="form">
        <p id="heading">Send OTP</p>
        <div className="field">
          @
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="email"
          />
        </div>
        <button className="button1">SEND OTP</button>
      </form>
    </div>
  );
}

export default OtpVerify;
