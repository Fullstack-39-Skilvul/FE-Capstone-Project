import React from "react";
import { IMAGES } from "../../assets/constant";
import { Link } from "react-scroll";

function TryKonseling() {
  return (
    <div className="mt-10 md:mt-0 mx-5 md:mx-20 md:gap-10 p-10 rounded-xl text-white bg-sky-500 text-center md:flex">
      <div className="md:w-[1800px]">
        <img src={IMAGES.imgAbout} alt="Ilustrator Manusia" width={400} />
      </div>
      <div className="md:flex md:flex-col md:justify-start md:text-left">
        <div className="text-xl font-semibold text-center mt-10 mb-5 md:mt-0 md:text-3xl">
          Temukan Cahaya dalam Konseling
        </div>
        <div className=" text-justify text-sm leading-7">
          Bersama-Sama Atasi Tantangan di Mahasucita: Kehidupan penuh tantangan,
          tapi dalam konseling, ada sinar harapan. Mari bersama melangkah,
          bicara, dan cari solusi. Setiap sesi gali akar masalah, temukan
          kekuatan, dan rancang langkah ke perubahan positif. Jangan biarkan
          masalah mengendalikan hidup. Bersama, capai kebahagiaan di Mahasucita.
          Temukan cahaya di sini.
        </div>
        <div>
          <Link to="pricing" smooth={true}>
            <button className="bg-yellow-300 hover:bg-blue-600 text-sm text-blue-950 px-6 py-2 rounded-xl mt-7 font-semibold">
              Jadwalkan Konsultasi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TryKonseling;
