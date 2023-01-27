import React, {useState} from "react";
import "../style/Login.css";
import { Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logochess from "../asset/logo-chess.PNG";
import users from "../local-json/users.json";
import Sign from "./Sign";
const Login = () => {

  const [mobile, setMobile] = useState("")
  const [active, setActive] = useState("login");
  const [userData, setUserData] = useState();
  const handleSubmit = () =>{
    users.map((user) =>{
      if(user.number == mobile)
        {
          setActive("sign");
          setUserData(user);
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
                className="btn btn-primary btn-lg btn-block"
                onClick={() => handleSubmit()}
              >
                Get Started
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted"> OR </p>
              </div>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{
                  backgroundColor: "#3b5998",
                }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f me-2" /> Continue with Email
              </a>
              <a
                className="btn btn-primary btn-lg btn-block"
                style={{
                  backgroundColor: "#55acee",
                }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2" /> Continue with Google
              </a>
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
