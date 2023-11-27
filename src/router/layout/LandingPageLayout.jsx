import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landingPage/LandingPage";
import Footer from "../../components/footer/Footer";

function LandingPageLayout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
