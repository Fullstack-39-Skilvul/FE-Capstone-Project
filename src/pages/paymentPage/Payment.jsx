import { WhatsappLogo } from "phosphor-react";
import React from "react";

function Payment() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="text-2xl lg:mt-[100px] md:mb-5 md:text-4xl text-center font-bold text-blue-950">
        Payment
        <span className="text-sky-500"> Page</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="shadow flex justify-center gap-10 rounded-lg border border-gray-200">
          <div className="p-10 w-96">
            <div>No rek :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <select name="" id="" className="w-full rounded">
                <option value="" className="flex justify-between">
                  222-222-444-555 <div> BRI</div>
                </option>
                <option value="" className="flex justify-between">
                  231-492-091-283 <div> BCA</div>
                </option>
                <option value="" className="flex justify-between">
                  222-222-444-555 <div> BNI</div>
                </option>
                <option value="" className="flex justify-between">
                  222-222-444-555 <div> MANDIRI</div>
                </option>
              </select>
            </div>
            <br />
            <div>Atas Nama :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <div>PT. Manahsucita</div>
            </div>
            <br />
            <div>Total Bayar :</div>
            <div className="flex justify-between shadow-xl border rounded-lg border-gray-200 px-3 py-2">
              <div>Rp. 245.000,00</div>
            </div>
          </div>
        </div>
        <div className="mt-9 mb-2 text-center font-bold text-blue-950">
          TATA CARA MELAKUKAN PEMBAYARAN
        </div>
        <div className="mt-2">
          <ol className="list-decimal space-y-2">
            <li>Lakukan pembayaran dengan harga yang tertera di atas</li>
            <li>Masukan nomer rekening sesuai dengan yang kamu pilih</li>
            <li>Screenshot butki pembayaran</li>
            <li>Kirim bukti pembyaran pada tombol di bawah ini</li>
            <li>Tunggu validasi dari admin {"(Max 1x24 Jam)"}</li>
          </ol>
        </div>

        <button className="flex gap-2 mt-10 items-center justify-center w-96 bg-sky-500 rounded-lg py-2 text-white">
          <div>Kirim Bukti Pembayaran</div>
          <WhatsappLogo size={20} />
        </button>
      </div>
    </div>
  );
}

export default Payment;