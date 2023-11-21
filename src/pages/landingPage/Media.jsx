import {
  Armchair,
  Calendar,
  Camera,
  Coins,
  EyeSlash,
  Person,
  TestTube,
  Users,
} from "phosphor-react";
import React from "react";

function Media() {
  return (
    <div className="mx-10 text-stone-600">
      <div>
        <div className="text-2xl mt-20 md:text-4xl text-center font-bold text-blue-950">
          Pilih Media
          <span className="text-sky-500"> Konseling</span>
        </div>
        <p className="text-stone-600 mt-5 text-center">
          Kesehatan mental Anda adalah prioritas kami. Dapatkan dukungan penuh
          dari para profesional konseling kami melalui sesi offline yang nyaman
          atau konseling online yang praktis melalui WhatsApp dan Google Meet.
        </p>
      </div>
      <div className="flex justify-center flex-wrap mt-10 gap-10">
        {/* konseling offlne */}
        <div className="border w-[363px] border-blue-950 shadow-xl rounded-3xl p-7">
          <div className="text-center text-stone-600">
            <div className="text-sky-500 font-bold text-lg">
              Konseling Offline
            </div>
            <div>Lokasi : Bandung | Jakarta</div>
          </div>
          <div className="mt-5">
            <ul className="gap-3 flex flex-col text-sm ">
              <li className="flex items-center gap-3">
                <Armchair size={30} color="#2993D5" /> Ruangan konseling yang
                nyaman
              </li>
              <li className="flex items-center gap-3">
                <Person size={30} color="#2993D5" /> Efektifitas konseling
                maksimal
              </li>
              <li className="flex items-center gap-3">
                <Users size={30} color="#2993D5" /> Bertemu langsung dengan
                psikolog
              </li>
              <li className="flex items-center gap-3">
                <TestTube size={40} color="#2993D5" /> Bisa melakukan test
                assessment & psikoterapi
              </li>
            </ul>
          </div>
          <div className="text-center mt-5">
            <div className="text-sky-500 font-bold text-xl">
              Rp. 399K<span className="text-stone-700 text-base">/Jam</span>
            </div>
            <div>
              <button className="bg-yellow-400 text-blue-950 px-6 py-2 rounded-xl mt-5 font-semibold">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>
        {/* konseling offline */}
        <div className="border w-[363px] border-blue-950 shadow-xl rounded-3xl p-7">
          <div className="text-center text-stone-600">
            <div className="text-sky-500 font-bold text-lg">
              Konseling Online
            </div>
            <div>Via : Whatsapp | Google Meet</div>
          </div>
          <div className="mt-5">
            <ul className="gap-3 flex flex-col text-sm">
              <li className="flex items-center gap-3">
                <Coins size={30} color="#2993D5" /> Biaya lebih terjangkau
              </li>
              <li className="flex items-center gap-3">
                <Calendar size={30} color="#2993D5" /> Waktu dan tempat flexible
              </li>
              <li className="flex items-center gap-3">
                <EyeSlash size={30} color="#2993D5" /> Privasi 100% aman terjaga
              </li>
              <li className="flex items-center gap-3">
                <Camera size={40} color="#2993D5" /> Bisa memilih konseling
                sesuai keinginan
              </li>
            </ul>
          </div>
          <div className="text-center mt-5">
            <div className="text-sky-500 font-bold text-xl">
              Rp. 249K<span className="text-stone-700 text-base">/Jam</span>
            </div>
            <div>
              <button className="bg-yellow-400 text-blue-950 px-6 py-2 rounded-xl mt-5 font-semibold">
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
