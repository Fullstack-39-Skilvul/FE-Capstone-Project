import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import AdminPageLayout from "./layout/AdminPageLayout";
import ContactPage from "../pages/contactPage/ContactPage";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/*" element={<AdminPageLayout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
