import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneRight,
  PaperPlaneTilt,
  PhoneCall,
  PushPin,
} from "phosphor-react";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="lg:mx-52 mx-10">
        <div className="pt-[100px] text-2xl md:text-4xl text-center font-bold text-blue-950">
          Sampaikan Pesan <span className="text-sky-500">Anda</span>
        </div>
        <p className="text-stone-600 mt-5 text-center font-light text-base leading-7 mb-10">
          Jika Anda memiliki pertanyaan, ide, atau hanya ingin berbicara, kami
          ingin mendengarnya! Silakan isi formulir di bawah atau hubungi kami
          melalui informasi kontak yang tersedia.
        </p>

        <div className="border shadow border-gray-200 rounded-2xl flex justify-between flex-wrap md:flex-nowrap">
          <div className="w-full p-10">
            <div className="text-sky-500 text-2xl mb-5 font-semibold flex items-center gap-2">
              Send Us A Message <Envelope size={30} />
            </div>
            <form action="" className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Your Name
              </label>
              <input
                className="border border-gray-300 rounded-xl"
                type="text"
                name=""
                id=""
                placeholder="Input Your Name"
              />

              <label htmlFor="email" className="mb-1 mt-5">
                Email
              </label>
              <input
                className="border border-gray-300 rounded-xl"
                type="text"
                name=""
                id=""
                placeholder="Input Your Email"
              />

              <label htmlFor="phone" className="mb-1 mt-5">
                Phone
              </label>
              <input
                className="border border-gray-300 rounded-xl"
                type="number"
                name=""
                id=""
                placeholder="Input Your Number"
              />

              <label htmlFor="message" className="mb-1 mt-5">
                Message
              </label>
              <textarea
                className="border border-gray-300 rounded-xl"
                name=""
                id=""
                placeholder="Input Your Message"
                rows="5"
              ></textarea>
              <button className="mt-5 text-sky-500 flex items-center justify-end">
                <PaperPlaneTilt size={40} weight="fill" />
              </button>
            </form>
          </div>
          <div className="bg-blue-950 w-full md:w-5/12 rounded-b-xl md:rounded-s-none md:rounded-e-2xl text-white p-10">
            <div className="text-sky-500 text-2xl mb-8 font-semibold">
              Contact Information
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="text-sky-500">
                  <PushPin weight="fill" size={30} />
                </div>
                <div className="text-sm">
                  Jl Soekarno Hatta No.10, 40225 Kota Bandung, Jawa Barat,
                  Indonesia
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-sky-500">
                  <PhoneCall weight="fill" size={30} />
                </div>
                <div className="text-sm">085898987367</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-sky-500">
                  <Envelope weight="fill" size={30} />
                </div>
                <div className="text-sm">manahsucita@gmail.com</div>
              </div>
            </div>
            <div className="text-sky-500 text-2xl mt-8 mb-1 font-semibold">
              Follow Us
            </div>
            <div className="text-sky-500 flex">
              <a href="">
                <InstagramLogo weight="fill" size={40} />
              </a>
              <a href="">
                <FacebookLogo weight="fill" size={40} />
              </a>
              <a href="">
                <LinkedinLogo weight="fill" size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-950 text-white mt-10 w-full bottom-0 text-center py-2">
        © 2023 Mahasucita. All rights reserved.
      </footer>
    </div>
  );
}

export default ContactPage;
