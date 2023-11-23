import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Pasien from "../../pages/adminPage/Pasien";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pasien" element={<Pasien />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
