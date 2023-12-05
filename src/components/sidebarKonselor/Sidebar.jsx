import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut, User } from "phosphor-react";
import { DATA_MENU } from "./constant";
import { getDataSidebarById } from "../../redux/action/sidebarAction";
import { logout } from "../../redux/action/loginAction";

function SidebarKonselor() {
  const dispatch = useDispatch();
  const { dataSidebar } = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(getDataSidebarById());
  }, [dispatch]);

  const avatarUrl = dataSidebar?.avatar || ""; // Ganti dengan URL default jika avatar tidak ada
  const adminName = dataSidebar?.nama || "Admin"; // Ganti dengan nama default jika tidak ada nama
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
  };

  return (
    <div className="shadow w-60 min-h-[100vh] absolute top-0 bg-white">
      <div className="pt-20 flex justify-center items-center flex-col">
        <div className="bg-gray-400 w-32 h-32 text-white flex items-center justify-center rounded-full">
          {avatarUrl ? (
            <img
              className="object-fit rounded-full h-32 w-32 object-cover"
              src={avatarUrl}
              alt="Avatar"
            />
          ) : (
            <User size={80} />
          )}
        </div>
        <p className="font-semibold mt-2 mb-5">{adminName}</p>
      </div>
      <div className="pl-3">
        <ul className="gap-4 flex flex-col">
          {/* Menampilkan menu dari DATA_MENU */}
          {DATA_MENU.map((item) => (
            <NavLink key={item.id} to={item.link}>
              <li className="flex items-center gap-2 hover:bg-sky-400 hover:text-white py-1 rounded pl-2  mr-2">
                {item.icon} {item.menu}
              </li>
            </NavLink>
          ))}
          {/* Menampilkan menu keluar */}
          <NavLink to="/login" onClick={handleLogout}>
            <li className="flex items-center gap-2 hover:bg-sky-400 hover:text-white py-1 rounded pl-2  mr-2">
              <SignOut /> Keluar
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default SidebarKonselor;
