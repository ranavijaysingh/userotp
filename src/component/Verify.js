import React from "react";
import { Link } from 'react-router-dom';

const Verify = ({userData}) => {
    return (
<div className="section-head">
        {/* Constant Photo Section */}
        <div className="left-photo">
          {/* <img src={leftphoto} alt='left side background'/> */}
        </div>
        {/* Login form section */}
        <div className="right-login-form">
          <center>
            <img src={userData.img} alt="Display Avatar Image" />
            <h5><b>{userData.name}</b></h5>
            <p>Plese verify your email id to gain access</p>
            <p>to the community</p>
            <p>+{userData.number}</p>
            <h5>Verify mobile no.</h5>
            <p>Please enter magic code set on +{userData.number}</p>
            <form>
                <input type="text"></input>
                <button>Confirm</button>
            </form>            
          </center>
        </div>
      </div>
    )
};
export default Verify;