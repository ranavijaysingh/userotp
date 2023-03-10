import React from "react";
import { Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgAvatar from "../asset/img_avatar.png";
import users from "../local-json/users.json";
import '../style/sign.css';
import Verify  from './Verify';
import  Login  from './Login.js';
import { Link } from 'react-router-dom';
const Sign = ({userData}) => {

  return (
    <div>
      <div className="section-head">
        {/* Constant Photo Section */}
        <div className="left-photo">
          {/* <img src={leftphoto} alt='left side background'/> */}
        </div>
        {/* Login form section */}
        <div className="right-login-form">
          <center>
            <div className="cardCenter">
              <p className="existPara"><b>Looks like your account already exist</b></p>
              <p><b>using this email id</b></p>
              <img src={userData.img} alt="Display Avatar Image" />
              <h5><b>{userData.name}</b></h5>
              <p>{userData.email}</p>
              <h6>Switch account</h6>
              <div className="btns">
                <button className="cancelBtn">Cancel</button>
                <Link to='/verify'><button className="otpBtn">Send OTP</button></Link>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Sign;
