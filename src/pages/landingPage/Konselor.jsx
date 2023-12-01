import { Smiley } from "phosphor-react";
import React, { useEffect } from "react";
import { DATA_SPESIALIS } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { getDataKonselor } from "../../redux/action/dataKonselorAction";

function Konselor() {
  const dispatch = useDispatch();
  const { isLoading, konselors } = useSelector((state) => state.dataKonselor);

  // console.log(konselors.data);
  useEffect(() => {
    dispatch(getDataKonselor());
  }, [dispatch]);

  return (
    <div className="mx-10 md:mx-20">
      <div>
        <div className="text-2xl mt-20 md:text-4xl text-center font-bold text-blue-950">
          Profesional
          <span className="text-sky-500"> Konselor</span>
        </div>
        <p className="text-stone-600 mt-5 text-center">
          Di Mahasucita, Anda akan menemukan konselor-konselor profesional
          berpengalaman yang ahli dalam kesehatan mental. Mereka memiliki
          kualifikasi yang teruji dan siap membantu Anda dengan dukungan yang
          komprehensif dalam perjalanan kesehatan mental Anda.
        </p>
      </div>
      <div className="flex gap-10">
        {konselors.data?.map((item) => (
          <div className="shadow border rounded-xl mt-10 w-64">
            <div className="">
              <img className="h-60 max-w-[100%]" src={item.avatar} alt="" />
            </div>
            <div className="bg-gray-100 rounded-t-xl p-4">
              <div className="font-bold text-blue-950">{item.nama}</div>
              {item.spesialisasi?.map((spesialisasiItem) => (
                <div
                  className=" font-semibold text-gray-600"
                  key={spesialisasiItem._id}
                >
                  Spesialis {spesialisasiItem.namaSpesialisasi}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <div className="text-center ">
          <p>
            Psikolog kami akan dengan penuh perhatian memberikan solusi terbaik
            untuk Anda mengenai :
          </p>
        </div>
        <div className="flex gap-10 flex-wrap items-center justify-center mt-5">
          {DATA_SPESIALIS.map((item) => (
            <div className="flex flex-col justify-center items-center ">
              <div className="bg-sky-500 text-2xl cursor-pointer hover:bg-yellow-300 w-14 h-14 items-center rounded-full justify-center flex">
                {item.icon}
              </div>
              <div>{item.spesialis}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Konselor;
