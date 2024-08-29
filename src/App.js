import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import VerifyOtp from "./components/VerifyOtp";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="text-center">
        <h1 className="text-4xl text-fuchsia-500 font-bold mb-5 mt-1">MERN Auth with OTP 2024 2024</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
