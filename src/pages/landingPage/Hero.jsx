import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-blue-700 to-blue-600 min-h-[100vh] px-10 md:px-20 md:pt-10 md:pb-0 flex flex-col-reverse md:items-center md:justify-around pt-16 gap-10 md:flex-row">
        <div className="text-white w-[100%]  text-center md:text-left pt-10 pb-10">
          <div className="text-2xl lg:text-5xl font-bold">
            <p className="md:mb-3">Perjalanan</p>
            <p className="md:mb-3">Kesehatan Mental </p>
            <p>
              Anda
              <span className="text-yellow-400"> Dimulai Di Sini</span>
            </p>
          </div>
          <p className=" font-extralight text-sm mt-3 max-w-lg">
            Tentukan langkah pertama menuju kesejahteraan mental Anda. Segera
            hubungi kami untuk mendapatkan panduan dan dukungan yang Anda
            butuhkan.
          </p>
          <button className="bg-yellow-400 text-blue-950 px-6 py-2 rounded-xl mt-10 font-semibold">
            Jadwalkan Konsultasi
          </button>
        </div>
        <div className="mx-auto mt-10 pt-10 md:pt-0 max-[100%]: items-center">
          <img
            src="/public/assets/img/cuate.svg"
            alt="Ilustrator"
            width={800}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
