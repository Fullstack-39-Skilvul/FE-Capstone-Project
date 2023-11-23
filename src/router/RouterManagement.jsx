import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import AdminPageLayout from "./layout/AdminPageLayout";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/admin/*" element={<AdminPageLayout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
