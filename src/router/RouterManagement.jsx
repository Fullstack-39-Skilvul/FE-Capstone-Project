import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import DetailKonselor from "../router/layout/DetailPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detailKonselor/*" element={<DetailKonselor />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
