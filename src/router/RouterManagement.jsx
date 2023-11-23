import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default RouterManagement;
