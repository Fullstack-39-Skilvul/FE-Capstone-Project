import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./layout/LandingPageLayout";
import AdminPageLayout from "./layout/AdminPageLayout";
import ContactPage from "../pages/contactPage/ContactPage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import DetailKonselor from "./layout/DetailPage";
import KonselorPage from "./layout/Konselor";

function RouterManagement() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/*" element={<LandingPageLayout />} />
          <Route path="/detailkonselor/*" element={<DetailKonselor />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/*" element={<AdminPageLayout />} />
          <Route path="/konselor/*" element={<KonselorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouterManagement;
