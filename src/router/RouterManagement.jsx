import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import PenjadwalanPage from "../pages/PenjadwalanPage/PenjadwalanPage";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<PenjadwalanPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default RouterManagement;
