import React from 'react'
import '../style/Login.css';
import leftphoto from '../asset/left-photo.PNG';
import logochess from '../asset/logo-chess.PNG';
const Login = () => {
  return (
    <div>
      <div className='section-head'>
        {/* Constant Photo Section */}
        <div className='left-photo'>
        {/* <img src={leftphoto} alt='left side background'/> */}
        </div>
        {/* Login form section */}
        <div className='right-login-form'>
          <center>
            <img src={logochess} alt='chessLogo' />
            <h4>Login</h4>
            <h5>Continue with your mobile no.</h5>
            <form>
              <input name='mobileNo' placeholder='Mobile No.'/>
              <button type='submit'> Get Started</button>
            </form>
            <div>------or------</div>
            <button> Continue with Email</button>
            <button>Continue with Google</button>
            <foorter>
              By Clicking 'Continue with Google/Email' above, you acknowledge that you have read and understood and agree to Pensil's Terms & Conditions and Privacy Policy
            </foorter>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Login
