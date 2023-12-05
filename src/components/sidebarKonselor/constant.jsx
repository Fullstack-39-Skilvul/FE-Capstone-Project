import { Gauge, SignOut, User } from "phosphor-react";
import { useDispatch } from "react-redux";

export const DATA_MENU = [
  {
    id: 1,
    menu: "Profil",
    link: "/konselorDashboard",
    icon: <Gauge />,
  },
  {
    id: 2,
    menu: "Jadwal Saya",
    link: "/konselorDashboard/jadwalKonselor",
    icon: <User />,
  },
];
