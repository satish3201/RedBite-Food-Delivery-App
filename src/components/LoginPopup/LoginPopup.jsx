import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='Login-Popup'>
      <form className="Login-Popup-container">
        <div className="Login-Popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-Popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}

          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login "}</button>
        <div className="Login-Popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : <p>Already have an account <span onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>

    </div>
  )
}

export default LoginPopup
