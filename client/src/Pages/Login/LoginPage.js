import React, { useState } from "react";
import "./login.css";
import LogoPic from "./../../Images/newLogo-removebg-preview.png";
import officiePic from "./../../Images/login.png";
import lockPic from "./../../Images/padlock.png";
import { Link } from "react-router-dom"; // Use "react-router-dom" instead of "react-router" for navigation
const registerURL = "http://localhost:3000/register"; // Corrected URL with "http://"
const loginURL = "http://localhost:3000/login"; // Corrected URL for login

// Function to create a new user
const createUser = async (email, password) => {
  try {
    const response = await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("User created successfully");
    } else {
      console.error("Failed to create user:", data.message);
    }
  } catch (error) {
    console.error("Error while creating user:", error);
  }
};

// Function to handle login
const handelLogin = async (email, password) => {
  try {
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Login successful");
      // Redirect to dashboard or home page upon successful login
      window.location.href = "/dashboard"; // Adjust the redirection path as needed
    } else {
      console.error("Invalid login credentials:", data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Attempt to log in the user
    await handelLogin(email, password);
  };

  const handleCreateUser = async () => {
    // Check if user exists, if not, create the user
    await createUser(email, password);
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
          <h2>Log in to your Account </h2>
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

            <div>
              <Link to={"/forgetpassword"} className="forget-password">
                Forget Password{" "}
              </Link>
            </div>

            <button type="submit" className="btn-login">
              Log in
            </button>

            <button
              type="button"
              onClick={handleCreateUser}
              className="btn-create-user"
            >
              Create New User
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
