import {
  Bandaids,
  Gauge,
  HardDrive,
  Money,
  SignOut,
  Syringe,
  User,
} from "phosphor-react";

export const DATA_MENU = [
  {
    id: 1,
    menu: "Dashboard",
    link: "/admin",
    icon: <Gauge />,
  },
  {
    id: 2,
    menu: "Data Pasien",
    link: "/admin/pasien",
    icon: <User />,
  },
  {
    id: 3,
    menu: "Data Konselor",
    link: "/admin/konselor",
    icon: <Syringe />,
  },
  {
    id: 4,
    menu: "Data Spesialis",
    link: "/admin/spesialis",
    icon: <Bandaids />,
  },
  {
    id: 5,
    menu: "Data Booking",
    link: "/admin/booking",
    icon: <HardDrive />,
  },
  {
    id: 6,
    menu: "Data Payment",
    link: "/admin/payment",
    icon: <Money />,
  },
];
