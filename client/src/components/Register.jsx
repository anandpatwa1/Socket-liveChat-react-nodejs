import React from 'react'

function Register() {
  return (
    <div className="OtpVerify">
      <form className="form">
        <p id="heading">Send OTP</p>
        <div className="field">
          o

          <input
            autoComplete="off"
            placeholder="OTP"
            className="input-field"
            type="number"
          />
        </div>
        <button className="button1">REGISTER</button>
      </form>
    </div>
  )
}

export default Register