import { Gauge, HardDrive, SignOut, Syringe, User } from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="shadow w-60 min-h-[100vh] absolute top-0 bg-white">
      <div className="pt-20 flex justify-center items-center flex-col">
        <div className=" bg-gray-400 w-32 h-32 text-white flex items-center justify-center rounded-full">
          <User size={80} />
        </div>
        <p className="font-semibold mt-2 mb-5">Admin</p>
      </div>
      <div className="pl-3">
        <ul className="gap-4 flex flex-col">
          <NavLink to="/admin">
            <li className="flex items-center gap-2">
              <Gauge /> Dashboard
            </li>
          </NavLink>
          <NavLink to="/admin/pasien">
            <li className="flex items-center gap-2">
              <User /> Data Pasien
            </li>
          </NavLink>
          <li className="flex items-center gap-2">
            <Syringe /> Data Konselor
          </li>
          <li className="flex items-center gap-2">
            <HardDrive /> Data Booking
          </li>
          <li className="flex items-center gap-2">
            <SignOut /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
