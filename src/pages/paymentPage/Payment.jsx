import axios from "axios";
import { format } from "date-fns";
import { WhatsappLogo } from "phosphor-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Payment() {
  const { idbooking } = useParams();

  const [selectedBank, setSelectedBank] = useState("");
  const [booking, setBooking] = useState("");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handlePaymentProofSubmit = async () => {
    try {
      // Persiapkan data booking yang sesuai
      const bookingData = {
        metodePembayaran: selectedBank,
        tanggalBayar: new Date().toISOString().split("T")[0],
        dataBooking: idbooking,
      };

      // Kirim data booking ke API
      const res = await axios.post(
        `https://be-capstone-project.vercel.app/payments/`,
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "token " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM",
          },
        }
      );

      // console.log(selectedBank)
      console.log("Data berhasil ditambahkan:", res.data);
      // console.log('Data berhasil ditambahkan:', res.data._id)

      openWhatsApp();

      // navigation(`/booking/${res.data.id}`);
    } catch (error) {
      console.error("Error saat menambahkan data:", error.message);
    }
  };

  async function getBooking() {
    try {
      const res = await axios.get(
        `https://be-capstone-project.vercel.app/bookings/` + idbooking,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "token " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM",
          },
        }
      );

      setBooking(res.data);
    } catch (error) {
      console.error(error);
      // return error
    }
  }

  const openWhatsApp = () => {
    // Gantilah nomor WhatsApp dan pesan sesuai kebutuhan
    const phoneNumber = "6285861617647";
    const message = `
    Halo mimin,

    Saya telah melakukan booking konseling dengan ID: ${idbooking}. 
    Berikut merupakan informasi pembayaran:
    
      - Metode Pembayaran: ${selectedBank}
      - Tanggal Pembayaran: ${format(new Date(), "dd MMMM yyyy")}
      - Total Pembayaran: ${
        booking ? formatRupiah(booking.jenisKonseling.harga) : "loading.."
      }

    Saya akan mengirim bukti pembayaran, mohon untuk segera diverifikasi. 
    Terima kasih.
  `;

    // Membuat tautan untuk membuka aplikasi WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Mengarahkan ke tautan WhatsApp
    window.location.href = whatsappLink;
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="text-2xl lg:mt-[100px] md:mb-5 md:text-4xl text-center font-bold text-blue-950">
        Payment
        <span className="text-sky-500"> Page</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="shadow flex justify-center gap-10 rounded-lg border border-gray-200">
          <div className="p-10 w-96">
            <div>No rek :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <select
                name=""
                id=""
                className="w-full rounded"
                value={selectedBank}
                onChange={handleBankChange}
              >
                <option
                  value="222-222-444-555 BRI"
                  className="flex justify-between"
                >
                  222-222-444-555 BRI
                </option>
                <option
                  value="231-492-091-283 BCA"
                  className="flex justify-between"
                >
                  231-492-091-283 BCA
                </option>
                <option
                  value="222-222-444-555 BNI"
                  className="flex justify-between"
                >
                  222-222-444-555 BNI
                </option>
                <option
                  value="222-222-444-555 MANDIRI"
                  className="flex justify-between"
                >
                  222-222-444-555 MANDIRI
                </option>
              </select>
            </div>
            <br />
            <div>Atas Nama :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <div>PT. Manahsucita</div>
            </div>
            <br />
            <div>Total Bayar :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <p>
                {booking
                  ? formatRupiah(booking.jenisKonseling.harga)
                  : "loading.."}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-9 mb-2 text-center font-bold text-blue-950">
          TATA CARA MELAKUKAN PEMBAYARAN
        </div>
        <div className="mt-2">
          <ol className="list-decimal space-y-2">
            <li>Lakukan pembayaran dengan harga yang tertera di atas</li>
            <li>Masukan nomer rekening sesuai dengan yang kamu pilih</li>
            <li>Screenshot butki pembayaran</li>
            <li>Kirim bukti pembyaran pada tombol di bawah ini</li>
            <li>Tunggu validasi dari admin {"(Max 1x24 Jam)"}</li>
          </ol>
        </div>

        <button
          className="flex gap-2 mt-10 items-center justify-center w-96 bg-sky-500 rounded-lg py-2 text-white"
          onClick={handlePaymentProofSubmit}
        >
          <div>Kirim Bukti Pembayaran</div>
          <WhatsappLogo size={20} />
        </button>
      </div>
    </div>
  );
}

export default Payment;
