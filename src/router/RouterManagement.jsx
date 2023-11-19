import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import DetailKonselorPage from "../pages/detailKonselor/DetailKonselorPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detailKonselor" element={<DetailKonselorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
