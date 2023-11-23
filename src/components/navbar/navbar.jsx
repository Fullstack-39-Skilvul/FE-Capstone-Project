import React from "react";
import { NavLink } from "react-router-dom";
import { IMAGES } from "../../assets/constant";

function Navbar() {
  return (
    <nav className="flex justify-between py-3 ps-4 pr-10 text-sky-500 shadow-sm items-center bg-white w-full">
      <div className="flex items-center gap-10">
        <div>
          <img
            src={IMAGES.logoManahsucita}
            alt="logo manahsucita"
            width={200}
          />
        </div>
        <div>
          <ul className="flex gap-10 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Pilih Konseling</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>
        <NavLink>
          <button className="bg-sky-500 text-white px-3 py-2 rounded-xl text-sm">
            Jadwalkan Konsultasi
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;