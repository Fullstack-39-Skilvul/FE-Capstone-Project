import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Footer from "../../components/footer/Footer";
import KonselorPage from "../../pages/konselorPage/KonselorPage";

function LandingPageLayout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/konselor" element={<KonselorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
