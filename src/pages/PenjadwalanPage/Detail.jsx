import React, { useEffect, useState } from "react";
import Spesifikasi from "./Spesifikasi";
import MediaSesi from "./Components/MediaSesi";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { idbooking } = useParams();

  const [booking, setBooking] = useState(null);
  const [konselor, setKonselor] = useState(null);
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

      // const reskons = await axios.get('https://be-capstone-project.vercel.app/konselors/' + res.data.konselor._id, {
      //     headers: {
      //         // 'Content-Type': 'application/json',
      //         'Authorization': 'token ' + token,
      //     }
      // });

      // setKonselor(reskons.data)
    } catch (error) {
      console.error(error);
      // return error
    }
  }
  async function getKonselor() {
    try {
      if (booking) {
        const res = await axios.get(
          `https://be-capstone-project.vercel.app/konselors/${booking.konselor._id}`,
          {
            headers: {
              // 'Content-Type': 'application/json',
              Authorization: "token " + token,
            },
          }
        );

        setKonselor(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error(error);
      // Handle error jika ada
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBooking();
        // Panggil getKonselor hanya jika getBooking berhasil
        if (booking && booking.konselor) {
          await getKonselor();
        }
      } catch (error) {
        console.error(error);
        // Handle error jika ada
      }
    };

    fetchData();
  }, [idbooking]);

  return (
    <>
      <div>
        <div
          className="w-full flex-wrap p-2 pb-5 m-auto bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]"
          style={{ boxShadow: "18px 19px 14px -3px rgba(0,0,0,0.1)" }}
        >
          <div className="flex flex-wrap">
            {booking ? (
              <picture className="flex justify-start rounded">
                <img
                  className="rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]"
                  src={booking.konselor.avatar}
                />
              </picture>
            ) : (
              <p>loading</p>
            )}

            {booking ? (
              <div className="flex flex-col mt-2">
                <h1 className="flex mx-3 mt-2 font-bold text-xl">
                  {booking.konselor.nama}
                </h1>
                <Spesifikasi />
              </div>
            ) : (
              <p>loading</p>
            )}
          </div>
          <div>
            <div className="flex justify-center flex-wrap md:flex-nowrap md:mx-5 gap-2 mb-3 mt-4 text-[12px] md:text-base sm:gap-2 md:justify-between">
              <MediaSesi />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
