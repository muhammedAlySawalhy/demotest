import "./App.css";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./Pages/Login/LoginPage";
const registerURL = "http://localhost:4000/register";
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
function App() {
  useEffect(() => {
    createUser("admin@gmail.com", "admin");
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
