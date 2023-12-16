import { CalendarCheck, PhoneCall } from "@phosphor-icons/react";
import axios from "axios";
import { format } from "date-fns";
import { Calendar, Clock, MapPinLine } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const MediaSesi = () => {
  const { idbooking } = useParams();

  const [booking, setBooking] = useState(null);
  const token = localStorage.getItem(`token`) || null;

  // ambil data
  async function getBooking() {
    try {
      const res = await axios.get(
        `https://be-capstone-project.vercel.app/bookings/` + idbooking,
        {
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: "token " + token,
          },
        }
      );

      setBooking(res.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <>
      <div
        className="pr-3 pl-2 pb-2 border-b-2 border-r border-blue-700"
        style={{ boxShadow: "8px 9px 7px -3px rgba(0,0,0,0.1)" }}
      >
        <div className="bg-white pl-[1px] w-[25px] items-center rounded-md">
          <Clock size={24} color="#1C79F2" weight="fill" />
        </div>
        <h3 className="font-bold text-sm">Waktu Konseling</h3>
        <h5>
          {booking ? `Pukul ${booking.waktu} WIB` : <Skeleton width={100} />}
        </h5>
      </div>
      <div
        className="pr-3 pl-2 border-b-2 border-r border-blue-700"
        style={{ boxShadow: "8px 9px 7px -3px rgba(0,0,0,0.1)" }}
      >
        <div className="bg-white pl-[1px] w-[26px] items-center rounded-md">
          <MapPinLine size={24} color="#1C79F2" weight="fill" />
        </div>
        <h3 className="font-bold text-sm">Tempat</h3>
        <h5>
          {booking ? (
            booking.jenisKonseling?.platformPertemuan
          ) : (
            <Skeleton width={100} />
          )}
        </h5>
      </div>
      <div
        className="pr-3 pl-2 border-b-2 border-r border-blue-700"
        style={{ boxShadow: "8px 9px 7px -3px rgba(0,0,0,0.1)" }}
      >
        <div className="bg-white pl-[1px] w-[26px] items-center rounded-md">
          <Calendar size={24} color="#1C79F2" weight="fill" />
        </div>
        <h3 className="font-bold text-sm">Tanggal</h3>
        <h5>
          {booking ? (
            format(new Date(booking.tanggal), "dd MMMM yyyy")
          ) : (
            <Skeleton width={100} />
          )}
        </h5>
      </div>
      <div
        className="pr-3 pl-2 border-b-2 border-r border-blue-700"
        style={{ boxShadow: "8px 9px 7px -3px rgba(0,0,0,0.1)" }}
      >
        <div className="bg-white pl-[1px] w-[26px] items-center rounded-md">
          <CalendarCheck size={24} color="#1C79F2" weight="fill" />
        </div>
        <h3 className="font-bold text-sm">Durasi</h3>
        <h5>{booking ? "45 Menit" : <Skeleton width={100} />}</h5>
      </div>
    </>
  );
};

export default MediaSesi;
