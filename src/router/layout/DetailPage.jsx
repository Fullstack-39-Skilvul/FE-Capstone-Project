import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import DetailKonselor from "../../pages/detailKonselor/DetailKonselorPage";

function DetailPage() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DetailKonselor />} />
        <Route path="/:id/:idbooking" element={<DetailKonselor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default DetailPage;