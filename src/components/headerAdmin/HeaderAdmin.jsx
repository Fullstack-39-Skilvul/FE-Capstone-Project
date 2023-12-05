import React from "react";
import { IMAGES } from "../../assets/constant";
import { Bell, Smiley, User } from "phosphor-react";

function HeaderAdmin() {
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
            <div className="text-xs">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
