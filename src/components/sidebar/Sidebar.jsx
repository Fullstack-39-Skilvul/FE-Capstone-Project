import {
  Bandaids,
  Gauge,
  HardDrive,
  SignOut,
  Syringe,
  User,
} from "phosphor-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { DATA_MENU } from "./constant";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/loginAction";

function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
  };

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
          {DATA_MENU.map((item) => (
            <NavLink key={item.id} to={item.link}>
              <li className="flex items-center gap-2 hover:bg-sky-400 hover:text-white py-1 rounded pl-2  mr-2">
                {item.icon} {item.menu}
              </li>
            </NavLink>
          ))}

          <NavLink to="/login">
            <li
              onClick={handleLogout}
              className="flex items-center gap-2 hover:bg-sky-400 hover:text-white py-1 rounded pl-2  mr-2"
            >
              <SignOut /> Keluar
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
