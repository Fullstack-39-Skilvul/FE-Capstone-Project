import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import KonselorPage from "../pages/konselorPage/KonselorPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/konselor" element={<KonselorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
