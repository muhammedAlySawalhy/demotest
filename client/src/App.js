import "./App.css";
import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./Pages/Login/LoginPage";

function App() {
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
