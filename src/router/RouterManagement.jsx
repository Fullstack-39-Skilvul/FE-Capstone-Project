import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import PenjadwalanPage from "../pages/PenjadwalanPage/PenjadwalanPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<PenjadwalanPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
