import React, {useState} from "react";
import "../style/Login.css";
import { Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logochess from "../asset/logo-chess.PNG";
import users from "../local-json/users.json";
import Sign from "./Sign";
const Login = ({setGetUserData}) => {

  const [mobile, setMobile] = useState("")
  const [active, setActive] = useState("login");
  const [userData, setUserData] = useState();
  const handleSubmit = () =>{
    users.map((user) =>{
      if(user.number == mobile)
        {
          setActive("sign");
          setUserData(user);
          setGetUserData(user);
        }
    })
    
  }

  return (
    <div>
      {active=="login" && <div className="section-head">
        <div className="left-photo">
        </div>
        <div className="right-login-form">
          <center>
            <img src={logochess} alt="chessLogo" />
            <h4> Login </h4> <h5> Continue with your mobile no. </h5>
            <form  onSubmit={e => e.preventDefault()}>
              <div className="form-outline mb-4">
                <input
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={mobile}
                  onChange = { (e) => setMobile(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13" placeholder="Mobile Number">
                </label>
              </div>
              <button
                type="submit"
                className="startBtn"
                onClick={() => handleSubmit()}
              >
                Get Started
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted"> OR </p>
              </div>
              <button
                className="emailGoogleBtn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> &nbsp;<b>Continue with Email</b>
              </button>
              <br></br>
              <button
                className="emailGoogleBtn googleBtn"
                href="#!"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg> &nbsp;<b>Contine with Google</b>
              </button>
            </form>
            <footer>
              By Clicking 'Continue with Google/Email' above, you acknowledge
              that you have read and understood and agree to Pensil 's Terms &
              Conditions and Privacy Policy{" "}
            </footer>{" "}
          </center>{" "}
        </div>{" "}
      </div>}
      {active=="sign" && <Sign userData={userData}/>}
    </div>
  );
};

export default Login;
