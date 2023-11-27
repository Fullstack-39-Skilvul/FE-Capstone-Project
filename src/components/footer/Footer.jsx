import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import React from "react";
import { IMAGES } from "../../assets/constant";

function Footer() {
  return (
    <div className="mt-20 text-sm leading-6">
      <div className="bg-blue-950 text-white p-10 flex flex-wrap justify-between items-start px-20 gap-10 mt-10">
        <div className="w-80">
          <img
            className=" ml-[-20px]"
            src={IMAGES.logoManahsucita}
            alt="Logo Manahsucita"
            width={200}
          />
          <p>
            Jl Soekarno Hatta No.10, 40225 <br /> Kota Bandung, Jawa Barat,
            Indonesia
          </p>
        </div>
        <div>
          <div className="font-bold text-sky-500 text-lg">Features</div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pilih Konseling</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-sky-500 text-lg">Butuh Bantuan ?</div>
          <p>
            Hubungi: <br /> 085861617647
          </p>
          <p>
            Email: <br /> manahsucita@gmail.com
          </p>
        </div>
        <div>
          <div className="font-bold text-sky-500 text-lg">Follow Us</div>
          <div className="text-sky-600 text-3xl flex">
            <a href="">
              <InstagramLogo weight="fill" />
            </a>
            <a href="">
              <FacebookLogo weight="fill" />
            </a>
            <a href="">
              <LinkedinLogo weight="fill" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-center text-white pb-2">
        <p>© 2023 Mahasucita. All rights reserved.</p>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> dev
