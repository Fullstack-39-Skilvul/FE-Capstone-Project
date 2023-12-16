import React, { useEffect } from "react";
import HeaderKonselor from "../../components/headerKonselor/HeaderKonselor";
import SidebarKonselor from "../../components/sidebarKonselor/Sidebar";
import ContentKonselor from "../../components/contentKonselor/ContentKonselor";
import JadwalKonselor from "../../pages/konselorDashboardPage/JadwalKonselor";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profil from "../../pages/konselorDashboardPage/Profil";

function KonselorPageLayout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);
  return (
    <div className="h-[100vh] absolute bg-gray-50 w-full">
      <HeaderKonselor />
      <SidebarKonselor />
      <ContentKonselor>
        {token && (
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="jadwalKonselor" element={<JadwalKonselor />} />
          </Routes>
        )}
      </ContentKonselor>
    </div>
  );
}

export default KonselorPageLayout;
