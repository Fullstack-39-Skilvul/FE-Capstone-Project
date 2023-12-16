import { Bandaids, Calendar, Syringe, User } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataKonselor } from "../../redux/action/dataKonselorAction";
import { getDataBooking } from "../../redux/action/bookingAdminAction";
import { getDataSpesialisasi } from "../../redux/action/spesialisasiAction";
import { loginSuccess } from "../../redux/action/loginAction";
import { getDataPasien } from "../../redux/action/pasienAction";
import { Spinner } from "flowbite-react";

function Dashboard() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const { pasiens } = useSelector((state) => state.pasien);
  const { bookings } = useSelector((state) => state.bookingAdmin);
  const { konselors } = useSelector((state) => state.dataKonselor);
  const { spesialisasis } = useSelector((state) => state.spesialis);

  useEffect(() => {
    const fetchData = async () => {
      const userData = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
      };

      if (userData.token && userData.userId) {
        try {
          await dispatch(getDataPasien());
          await dispatch(getDataKonselor());
          await dispatch(getDataBooking());
          await dispatch(getDataSpesialisasi());
          setLoading(false);
        } catch (error) {
          console.log("Error fetching data" + error);
        }
      }
    };

    fetchData();
  }, [dispatch]);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center mt-10">
  //       <Spinner />
  //     </div>
  //   ); // Tampilkan pesan loading atau spinner
  // }

  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Dashboard</div>
      <div className="mt-5 flex justify-center gap-10">
        {isLoading ? (
          <div className="mt-20">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="shadow border bg-blue-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
              <div>
                <div>Data Pasien</div>
                <div className="font-bold">{pasiens?.data?.length}</div>
              </div>
              <div>
                <User size={45} />
              </div>
            </div>
            <div className="shadow border bg-yellow-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
              <div>
                <div>Data Konselor</div>
                <div className="font-bold">{konselors?.data?.length}</div>
              </div>
              <div>
                <Syringe size={45} />
              </div>
            </div>
            <div className="shadow border bg-green-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
              <div>
                <div>Data Booking</div>
                <div className="font-bold">{bookings?.data?.length}</div>
              </div>
              <div>
                <Calendar size={45} />
              </div>
            </div>
            <div className="shadow border bg-red-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
              <div>
                <div>Data Spesialis</div>
                <div className="font-bold">{spesialisasis?.data?.length}</div>
              </div>
              <div>
                <Bandaids size={45} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
