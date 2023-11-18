import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import Navbar from "../components/navbar/Navbar";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
