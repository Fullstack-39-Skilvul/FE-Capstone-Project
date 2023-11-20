import {
  Barbell,
  Brain,
  DotsThreeCircle,
  GraduationCap,
  HeartBreak,
  HouseLine,
  Person,
  Smiley,
  UsersFour,
} from "phosphor-react";

export const DATA_ABOUT = [
  {
    id: 1,
    icon: <Brain />,
    judul1: "Kesehatan",
    judul2: "Mental",
    deskripsi:
      "Kami memahami bahwa kesehatan mental adalah aset berharga yang harus dijaga dengan serius. Kami telah menyediakan platform yang aman, mendukung, dan bersahabat untuk Anda menjalani proses konseling dan perawatan.",
  },
  {
    id: 2,
    icon: <UsersFour />,
    judul1: "Team",
    judul2: "Profesional",
    deskripsi:
      "Kami bekerja sama dengan tim profesional kesehatan mental berlisensi yang memiliki pengalaman luas dalam berbagai bidang seperti psikologi, psikiatri, dan konseling. Mereka siap membantu Anda mengatasi berbagai masalah mental.",
  },
  {
    id: 3,
    icon: <HeartBreak />,
    judul1: "Kenyamanan",
    judul2: "Pengguna",
    deskripsi:
      "Kami memahami bahwa waktu dan jarak bisa menjadi hambatan dalam mencari bantuan. Oleh karena itu, kami menyediakan layanan konseling online yang nyaman, sehingga Anda dapat mengakses bantuan kapan saja dan di mana saja.",
  },
];

export const DATA_SPESIALIS = [
  {
    id: 1,
    icon: <Smiley width={25} />,
    spesialis: "Emotion",
  },
  {
    id: 2,
    icon: <Barbell width={25} />,
    spesialis: "Pekerjaan",
  },
  {
    id: 3,
    icon: <HouseLine width={25} />,
    spesialis: "Keluarga",
  },
  {
    id: 4,
    icon: <GraduationCap width={25} />,
    spesialis: "Pendidikan",
  },
  {
    id: 5,
    icon: <HeartBreak width={25} />,
    spesialis: "Love",
  },
  {
    id: 6,
    icon: <Person width={25} />,
    spesialis: "Sosial",
  },
  {
    id: 7,
    icon: <Brain width={25} />,
    spesialis: "Mental",
  },
  {
    id: 8,
    icon: <DotsThreeCircle width={25} />,
    spesialis: "Lainnya",
  },
];
