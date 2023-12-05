import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import JamKonseling from "./JamKonseling";
import axios from "axios";

const BiodataCard = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [jam, setJam] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [konselor, setKonselor] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    getKonselor();
  }, []);

  const getKonselor = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/` + id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + token,
          },
        }
      );

      setKonselor(res.data);
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const submitbutton = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const jenisId = localStorage.getItem("metode");
      // Ubah bagian ini
      const jenisKonselingId = jenisId.id;
      // Persiapkan data booking yang sesuai
      const bookingData = {
        tanggal: tanggal,
        waktu: jam,
        pasien: userId,
        konselor: id,
        jenisKonseling: jenisKonselingId,
      };

      // Kirim data booking ke API
      const res = await axios.post(
        `https://be-capstone-project.vercel.app/bookings/`,
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + token,
          },
        }
      );

      console.log("Data berhasil ditambahkan:", res.data);
      setBookingId(res.data.id);
      navigation(`/booking/${res.data.id}`);
    } catch (error) {
      console.error("Error saat menambahkan data:", error.message);
      setBookingId(null);
    }
  };

  return (
    <>
      <div>
        <div
          className="flex max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300 rounded-xl border border-[#0F2650]"
          style={{ boxShadow: "18px 19px 14px -3px rgba(0,0,0,0.1)" }}
        >
          <p className="mb-6 mx-3 text-sm w-full">
            {konselor ? konselor.bio : "Loading..."}
          </p>
          <p className="flex w-full mb-4 justify-center text-center rounded-3xl bg-[#ffdb38cd] font-bold text-md px-8 py-4">
            {konselor ? konselor.motivasi : "Loading..."}
          </p>
          <div className="flex justify-center w-full gap-3">
            <JamKonseling
              tanggal={tanggal}
              setJam={setJam}
              jam={jam}
              setTanggal={setTanggal}
            />
          </div>
          <div className="flex justify-end w-full mt-6">
            <Link
              className="flex p-2 px-4 bg-[#063D82] hover:bg-blue-700 hover:border-b hover:border-[#063D82] text-white text-sm rounded-2xl"
              to={`/booking/${bookingId}`}
              onClick={submitbutton}
            >
              Booking Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiodataCard;
