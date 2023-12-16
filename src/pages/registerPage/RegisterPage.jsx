import React, { useState } from "react";
import { IMAGES } from "../../assets/constant";
import { useDispatch } from "react-redux";
import { createDataPasien } from "../../redux/action/pasienAction";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { Spinner } from "flowbite-react";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol loading
  const [newValue, setNewValue] = useState({
    namaPasien: "",
    email: "",
    password: "",
    alamat: "",
    noTelepon: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");

    if (!newValue.namaPasien || !newValue.email || !newValue.password) {
      setError("Data tidak boleh kosong !");
      return;
    }

    try {
      // Menetapkan isLoading menjadi true saat proses registrasi dimulai
      setIsLoading(true);

      await dispatch(createDataPasien(newValue));

      setNewValue({
        namaPasien: "",
        email: "",
        password: "",
        alamat: "",
        noTelepon: "",
      });

      toast.success("Registration successful! Please login.");

      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
      toast.error("Registration failed. Please try again.");

      setError("Registration failed. Please try again.");
    } finally {
      // Menetapkan isLoading menjadi false setelah proses registrasi selesai
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center min-h-[100vh]">
      <Toaster />
      <div className="flex justify-center gap-5 lg:gap-28 mx-10 my-20 items-center flex-wrap">
        <div className="max-w-full">
          <img src={IMAGES.gambarLogin} alt="" width={505} />
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
              value={newValue.namaPasien}
              onChange={(e) =>
                setNewValue({
                  ...newValue,
                  namaPasien: e.target.value,
                })
              }
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Alamat"
              value={newValue.alamat}
              onChange={(e) =>
                setNewValue({
                  ...newValue,
                  alamat: e.target.value,
                })
              }
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="number"
              placeholder="No Telepon"
              value={newValue.noTelepon}
              onChange={(e) =>
                setNewValue({
                  ...newValue,
                  noTelepon: e.target.value,
                })
              }
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="email"
              placeholder="Email"
              value={newValue.email}
              onChange={(e) =>
                setNewValue({
                  ...newValue,
                  email: e.target.value,
                })
              }
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="password"
              placeholder="Password"
              value={newValue.password}
              onChange={(e) =>
                setNewValue({
                  ...newValue,
                  password: e.target.value,
                })
              }
            />
            {error && <p className="text-red-500">{error}</p>}
            {/* Menampilkan spinner jika isLoading true */}
            <button
              onClick={handleCreate}
              className="w-full py-1 bg-sky-500 rounded-md text-white"
            >
              {isLoading ? <Spinner /> : <p>Register</p>}
            </button>
          </form>
          <div className="mt-10">
            Sudah punya akun ?
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
