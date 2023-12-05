import React, { useEffect } from "react";
import { IMAGES } from "../../assets/constant";
import { Bell, Smiley, User } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { getDataKonselorById } from "../../redux/action/konselorAction";
import { getDataSidebarById } from "../../redux/action/sidebarAction";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/action/loginAction";

function HeaderKonselor() {
  const dispatch = useDispatch();
  const { dataSidebar } = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(getDataSidebarById());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
  };
  return (
    <div className="flex fixed z-50 top-0 justify-between px-10 py-2 items-center shadow w-full bg-white">
      <div>
        <div>
          <img
            src={IMAGES.logoManahsucita}
            alt="Logo Manahsucita"
            width={200}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className=" bg-gray-400 w-9 h-9 text-white flex items-center justify-center rounded-full">
            {dataSidebar.avatar ? (
              <img
                className="object-cover rounded-full w-9 h-9"
                src={dataSidebar.avatar}
                alt="avatar"
              />
            ) : (
              <User size={20} />
            )}
          </div>
          <div className="text-sm flex-col flex items-end">
            <div className="font-semibold">
              {dataSidebar.nama ? dataSidebar.nama : "konselor"}
            </div>
            <NavLink to="/login">
              <div
                onClick={handleLogout}
                className="text-xs cursor-pointer hover:text-blue-500"
              >
                Logout
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderKonselor;
