import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Footer from "../../components/footer/Footer";
import Payment from "../../pages/paymentPage/Payment";
import KonselorPage from "../../pages/konselorPage/KonselorPage";
import NavbarComponent from "../../components/navbar/Navbar";

function LandingPageLayout() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/konselor" element={<KonselorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
