import React from "react";
import { IMAGES } from "../../assets/constant";

function LoginPage() {
  return (
    <div className="flex justify-center min-h-[100vh]">
      <div className="flex justify-center gap-10 lg:gap-28 mx-10 my-48 flex-wrap  ">
        <div className="max-w-full">
          <img src={IMAGES.gambarLogin} alt="" width={600} />
        </div>
        <div className="flex flex-col">
          <img
            className="absolute right-0 z-[-999] top-0"
            src={IMAGES.blob}
            alt=""
            width={730}
          />
          <div className="text-blue-950 font-bold text-center mb-3 text-2xl">
            LOGIN
          </div>
          <div className="text-center mb-8">
            Welcome Back, please{" "}
            <span className="bg-yellow-300 px-1 rounded-lg">login</span> to your
            account
          </div>
          <form action="" className="flex flex-col gap-6">
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
            <button className="w-full py-1 bg-sky-500 rounded-md text-white">
              Login
            </button>
          </form>
          <div className="mt-10">
            Belum punya akun ?{" "}
            <a className="text-blue-950 font-semibold" href="/register">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
