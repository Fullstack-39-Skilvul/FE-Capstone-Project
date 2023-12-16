import React from "react";
import { IMAGES } from "../../assets/constant";
import { Bell, Smiley, User } from "phosphor-react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action/loginAction";
import { NavLink } from "react-router-dom";

function HeaderAdmin() {
  const dispatch = useDispatch();

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
        <div>
          <Bell size={20} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className=" bg-gray-400 w-9 h-9 text-white flex items-center justify-center rounded-full">
            <User size={20} />
          </div>
          <div className="text-sm flex-col flex items-end">
            <div className="font-semibold">Admin</div>
            <NavLink to="/login">
              <div
                className="text-xs hover:text-sky-500 cursor-pointer"
                onClick={handleLogout}
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

export default HeaderAdmin;
