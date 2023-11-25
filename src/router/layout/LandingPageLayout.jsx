import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Payment from "../../pages/paymentPage/Payment";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
