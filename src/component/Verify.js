import React from "react";
import { Link } from 'react-router-dom';
import '../style/Verify.css';


const Verify = ({userData}) => {
    return (
<div className="section-head">
        {/* Constant Photo Section */}
        <div className="left-photo">
          {/* <img src={leftphoto} alt='left side background'/> */}
        </div>
        {/* Login form section */}
        <div className="right-login-form verify">
          <center>
            <img src={userData.img} alt="Display Avatar Image" />
            <h5><b>{userData.name}</b></h5>
            <p>Plese verify your email id to gain access</p>
            <p>to the community</p>
            <p className="paraInput"><span className="sp1">+{userData.number}</span><span className="sp2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>Verified</span></p>
            <div className="leftContent">
              <h5>Verify mobile no.</h5>
              <p>Please enter magic code set on </p>
              <p>+{userData.number}</p>
            </div>
            <form className="otpForm">
                <input type="text"></input>
                <button>Confirm</button>
            </form>            
          </center>
        </div>
      </div>
    )
};
export default Verify;