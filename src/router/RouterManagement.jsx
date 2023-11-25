import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import AdminPageLayout from "./layout/AdminPageLayout";
import LoginPage from "../pages/loginPage/LoginPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPageLayout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
