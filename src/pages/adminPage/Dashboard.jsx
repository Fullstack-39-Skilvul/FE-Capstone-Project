import { Bandaids, Calendar, Syringe, User } from "phosphor-react";
import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="text-sky-500 font-semibold text-2xl">Dashboard</div>
      <div className="mt-5 flex justify-center gap-10">
        <div className="shadow border bg-blue-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Pasien</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <User size={45} />
          </div>
        </div>
        <div className="shadow border bg-yellow-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Konselor</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <Syringe size={45} />
          </div>
        </div>
        <div className="shadow border bg-green-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Booking</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <Calendar size={45} />
          </div>
        </div>
        <div className="shadow border bg-red-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Spesialis</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <Bandaids size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
