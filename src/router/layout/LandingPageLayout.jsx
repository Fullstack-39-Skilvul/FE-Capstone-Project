import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
