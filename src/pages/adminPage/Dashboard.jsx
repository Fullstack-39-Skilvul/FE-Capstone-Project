import { User } from "phosphor-react";
import React from "react";

function Dashboard() {
  return (
    <div>
      <div>Dashborad Admin</div>
      <div className="mt-5 flex justify-center gap-10">
        <div className="shadow border bg-red-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Pasien</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <User size={45} />
          </div>
        </div>
        <div className="shadow border bg-red-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Pasien</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <User size={45} />
          </div>
        </div>
        <div className="shadow border bg-red-300 text-white w-52 p-4 flex items-center justify-between rounded-xl">
          <div>
            <div>Data Pasien</div>
            <div className="font-bold">500</div>
          </div>
          <div>
            <User size={45} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
