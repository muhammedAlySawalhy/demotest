import React from "react";
import { useState } from "react";
import "./login.css";
import LogoPic from "./../../Images/newLogo-removebg-preview.png";
import officiePic from "./../../Images/login.png";
import lockPic from "./../../Images/padlock.png";
import { Link } from "react-router";

const LoginPage = () => {
  // For Store Input Value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-login .my-font">
      <div className="left">
        <div className="sub-left">
          <div className="head">
            <div className="image">
              <img src={LogoPic} alt="logo" />
            </div>
            <h1>Login System</h1>
          </div>
          <h2>Log in to your Account </h2>
          <p className="sub-title">Welcome back!</p>
          <form className="login-form">
            <div className={`input-field `}>
              <span
                style={{ fontSize: "21px", color: "gray" }}
                className="material-symbols-outlined"
              >
                mail
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <p className={`valid-message`} style={{ fontSize: "10px" }}>
              Please Enter Valid Mail..
            </p>

            <div className={`input-field input-pass  `}>
              <div className="left">
                <img src={lockPic} alt="lockpng" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="right-input" style={{ cursor: "pointer" }}></div>
            </div>
            <p className={`valid-message `} style={{ fontSize: "10px" }}>
              Please Enter Valid Password..
            </p>

            <div>
              <Link to={"/fogetpassword"} className="forget-password">
                Forget Password{" "}
              </Link>
            </div>
            <button type="submit" className="btn-login">
              Log in
            </button>
          </form>
        </div>
      </div>

      <div className="right">
        <img src={officiePic} alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
