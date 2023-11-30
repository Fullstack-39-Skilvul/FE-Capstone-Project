import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import Penjadwalan from "../../pages/PenjadwalanPage/PenjadwalanPage";

function JadwalPage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Penjadwalan />} />
        <Route path="/:idbooking" element={<Penjadwalan />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default JadwalPage;