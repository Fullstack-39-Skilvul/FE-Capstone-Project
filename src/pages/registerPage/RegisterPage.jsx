import React from "react";
import { IMAGES } from "../../assets/constant";

function RegisterPage() {
  return (
    <div className="flex justify-center min-h-[100vh]">
      <div className="flex justify-center gap-10 lg:gap-28 mx-10 my-20 items-center flex-wrap">
        <div className="max-w-full">
          <img src={IMAGES.gambarLogin} alt="" width={600} />
        </div>
        <div className="flex flex-col bg-sky-300 p-10 rounded-3xl">
          <div className="text-blue-950 font-bold text-center mb-3 text-2xl">
            REGISTER
          </div>
          <div className="text-center mb-8">
            Ready to get started? Let's begin - create your account now!
          </div>
          <form action="" className="flex flex-col gap-6">
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Nama"
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="email"
              placeholder="Email"
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Password"
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Konfirmasi Password"
            />
            <button className="w-full py-1 bg-sky-500 rounded-md text-white">
              Register
            </button>
          </form>
          <div className="mt-10">
            Sudah punya akun ?{" "}
            <a className="text-blue-950 font-semibold" href="/login">
              Sign
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
