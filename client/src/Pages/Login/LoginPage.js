import React, { useState } from "react";
import "./login.css";
import LogoPic from "./../../Images/newLogo-removebg-preview.png";
import officiePic from "./../../Images/login.png";
import lockPic from "./../../Images/padlock.png";

const loginURL = "http://localhost:4000/login";

// Function to handle login
const handelLogin = async (
  email,
  password,
  setModalMessage,
  setModalVisible
) => {
  try {
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Show success message and redirect after a delay
      setModalMessage("Logged in successfully!");
      setModalVisible(true);
    } else {
      // Show error message for invalid credentials
      setModalMessage("Invalid email or password.");
      setModalVisible(true);
    }
  } catch (error) {
    console.error("Error during login:", error);
    setModalMessage("An error occurred. Please try again.");
    setModalVisible(true);
  }
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await handelLogin(email, password, setModalMessage, setModalVisible);
  };

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
          <h2>Log in to your Account</h2>
          <p className="sub-title">Welcome back!</p>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className={`input-field`}>
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
                required
              />
            </div>

            <p className={`valid-message`} style={{ fontSize: "10px" }}>
              Please Enter Valid Mail..
            </p>

            <div className={`input-field input-pass`}>
              <div className="left">
                <img src={lockPic} alt="lockpng" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="right-input" style={{ cursor: "pointer" }}></div>
            </div>
            <p className={`valid-message`} style={{ fontSize: "10px" }}>
              Please Enter Valid Password..
            </p>

            <button type="submit" className="btn-login">
              Log in
            </button>
          </form>
        </div>
      </div>

      <div className="right">
        <img src={officiePic} alt="login" />
      </div>

      {/* Modal for login success or failure */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button
              onClick={() => setModalVisible(false)}
              className="modal-close"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
