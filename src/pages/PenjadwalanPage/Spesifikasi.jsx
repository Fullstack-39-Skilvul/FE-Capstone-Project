import axios from "axios";
// import { get } from 'http';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Spesifikasi = () => {
  const { idbooking } = useParams();

  const [booking, setBooking] = useState(null);
  const token = localStorage.getItem(`token`);

  // ambil data
  async function getBooking() {
    try {
      const res = await axios.get(
        "https://be-capstone-project.vercel.app/bookings/" + idbooking,
        {
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: "token " + token,
          },
        }
      );

      setBooking(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
      // return error
    }
  }

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <>
      <div className="flex flex-wrap my-2 gap-2 mx-3">
        {booking ? (
          booking.konselor.spesialisasi.map((item) => {
            return (
              <div className="flex" key={item._id}>
                <p className="rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700">
                  {item.namaSpesialisasi}
                </p>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Spesifikasi;
