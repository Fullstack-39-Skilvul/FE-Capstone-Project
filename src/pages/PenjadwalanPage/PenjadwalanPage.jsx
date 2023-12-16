import React, { useEffect, useState } from "react";
import Card from "./Cart";
import Detail from "./Detail";
import Title from "./Title";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const PenjadwalanPage = () => {
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
      <Title />
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center w-full">
          <div className="flex mx-4 mb-7 w-[900px] md:w-[690]">
            <p className="flex justify-center w-44 bg-[#0F2650] hover:bg-blue-600 text-white font-bold text-base rounded-2xl mt-5 py-2">
              {booking ? (
                "Konseling " + booking.jenisKonseling?.jenis
              ) : (
                <Skeleton width={100} />
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-[300px] md:w-[450px] lg:w-[650px]">
            <Detail />
          </div>
          <div className="w-[300px] md:w-[260px] text-sm md:text-base">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default PenjadwalanPage;
