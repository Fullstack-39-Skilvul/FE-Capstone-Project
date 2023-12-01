import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import Pembayaran from "../../pages/paymentPage/Payment";

function Payment() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pembayaran />} />
        <Route path="/:idbooking" element={<Pembayaran />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Payment;