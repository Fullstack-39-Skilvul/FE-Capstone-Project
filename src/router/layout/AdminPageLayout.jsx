import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "../../components/headerAdmin/HeaderAdmin";
import Sidebar from "../../components/sidebar/sidebar";
import ContentAdmin from "../../components/contentAdmin/ContentAdmin";
import Dashboard from "../../pages/adminPage/Dashboard";
import Pasien from "../../pages/adminPage/Pasien";
import Konselor from "../../pages/adminPage/Konselor";
import Spesialis from "../../pages/adminPage/Spesialis";
import Booking from "../../pages/adminPage/Booking";
import Payment from "../../pages/adminPage/payment";

function AdminPageLayout() {
  return (
    <div className="h-[100vh] absolute bg-gray-50 w-full">
      <HeaderAdmin />
      <Sidebar />
      <ContentAdmin>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pasien" element={<Pasien />} />
          <Route path="/konselor" element={<Konselor />} />
          <Route path="/spesialis" element={<Spesialis />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </ContentAdmin>
    </div>
  );
}

export default AdminPageLayout;
