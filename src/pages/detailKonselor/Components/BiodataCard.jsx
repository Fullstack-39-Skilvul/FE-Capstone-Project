import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import JamKonseling from "./JamKonseling";
// import DateKonselor

const BiodataCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jam, setJam] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [konselor, setKonselor] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  // Retrieve data from localStorage
  const storedBooking = localStorage.getItem("metode");
  const storedUserId = localStorage.getItem("userId") || null;
  const token = localStorage.getItem("token") || null;
  const localStorageBooking = storedBooking ? JSON.parse(storedBooking) : null;

  const jenisId = localStorageBooking?.id || null;

  const isBookingValid = () => jam.trim() !== "" && tanggal.trim() !== "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (isBookingValid()) {
      submitButton();
    }
  };

  const submitButton = async () => {
    try {
      const bookingData = {
        tanggal,
        waktu: jam,
        pasien: storedUserId,
        konselor: id,
        jenisKonseling: jenisId,
      };

      const res = await axios.post(
        "https://be-capstone-project.vercel.app/bookings/",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      );

      console.log("Data berhasil ditambahkan:", res.data);
      setBookingId(res.data.id);
      navigate(`/booking/${res.data.id}`);
    } catch (error) {
      console.error("Error saat menambahkan data:", error.message);
      setBookingId(null);
    }
  };

  const getKonselor = async () => {
    try {
      const res = await axios.get(
        `https://be-capstone-project.vercel.app/konselors/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      );

      setKonselor(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getKonselor();
  }, [id, token]);

  return (
    <>
      <div>
        <div
          className="flex max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]"
          style={{ boxShadow: "18px 19px 14px -3px rgba(0,0,0,0.1)" }}
        >
          <p className="mb-6 mx-3 text-sm w-full ">
            {konselor ? (
              konselor.bio
            ) : (
              <div>
                <Skeleton width={200} />
              </div>
            )}
          </p>
          <p className="flex w-full mb-4 justify-center text-center rounded-3xl bg-[#ffdb38cd] font-bold text-md px-8 py-4">
            {konselor ? (
              konselor.motivasi
            ) : (
              <div>
                <Skeleton width={200} />
              </div>
            )}
          </p>
          <div className="flex justify-center w-full gap-3">
            <JamKonseling
              tanggal={tanggal}
              setJam={setJam}
              jam={jam}
              setTanggal={setTanggal}
            />
            {/* <DateKonselor /> */}
          </div>

          <div className="flex justify-end w-full mt-6">
            <Link
              className={`flex p-2 px-4 bg-[#063D82] hover:bg-blue-700 hover:border-b hover:border-[#063D82] text-white text-sm rounded-2xl ${
                !isBookingValid() && "opacity-50 cursor-not-allowed"
              }`}
              to={`/booking/${bookingId}`}
              onClick={submitHandler}
              disabled={!isBookingValid()}
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
