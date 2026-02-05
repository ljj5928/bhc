import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import StartUp from "./Pages/StartUp";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Mart" element={<Menu />} />
        <Route path="/Mart/Startup" element={<StartUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
