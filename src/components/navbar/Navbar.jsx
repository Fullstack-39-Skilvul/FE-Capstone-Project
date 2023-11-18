import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between py-3 ps-4 pe-10 text-sky-500 shadow-sm items-center fixed bg-white w-[100vw]">
      <div className="flex items-center gap-10">
        <div>
          <img
            src="../../../public/assets/img/Manahsucita.png"
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
          <button className="bg-sky-500 text-white px-3 py-1 rounded-xl ">
            Jadwalkan Konsultasi
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
