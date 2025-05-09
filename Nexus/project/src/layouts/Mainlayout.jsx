import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ⬅️ NO BrowserRouter here
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UserDashboard from '../pages/Dashboard/UserDashboard';

const Mainlayout = () => {
  return (
    <>
      <Header />
      <div className="w-[90%] m-auto px-7">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
