import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import KonselorPage from "../../pages/konselorPage/KonselorPage";

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<KonselorPage />} />
        <Route path="/:id" element={<KonselorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;