import { Brain } from "phosphor-react";
import React from "react";
import { DATA_ABOUT } from "./constant";

function About() {
  return (
    <div className=" min-h-[100vh] mx-10 md:mx-32">
      <div className="flex flex-col mt-16 justify-center items-center md:text-center">
        <div className="text-2xl md:text-4xl text-center font-bold text-blue-950">
          Mental Sehat Untuk <br />
          <span className="text-sky-500">Indonesia</span>
        </div>
        <p className="text-stone-600 mt-5 text-justify">
          Selamat datang di Mahasucita, platform konseling kesehatan mental yang
          memahami betapa pentingnya menjaga kesejahteraan mental dalam
          kehidupan modern kita. Kami berkomitmen untuk membantu Anda meraih
          keseimbangan dalam hidup, mengatasi tantangan mental, dan mencapai
          potensi penuh Anda. Di sini, kami ingin berbagi dengan Anda mengenai
          apa yang membuat Mahasucita unik :
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0">
          {DATA_ABOUT.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col border max-w-[320px] min-h-[300px] p-7 rounded-[40px] border-blue-950"
            >
              <div className=" flex justify-center items-center gap-1 text-md md:text-xl mb-5 mt-1 text-blue-950 font-semibold">
                {item.icon}
                {item.judul1}
                <span className="text-sky-500">{item.judul2}</span>
              </div>
              <p className="text-center text-stone-600 text-sm md:text-base">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
