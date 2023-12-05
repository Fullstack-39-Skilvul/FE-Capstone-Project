import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { loginUser } from "../../redux/action/loginAction";
import { IMAGES } from "../../assets/constant";

function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const userRole = auth.user?.role;

    if (auth.isAuthenticated) {
      toast.success("Login successful!");
      setLoginData({
        email: "",
        password: "",
      });

      switch (userRole) {
        case "admin":
          navigate("/admin");
          break;
        case "konselor":
          navigate("/konselorDashboard");
          break;
        case "pasien":
          navigate("/");
          break;
        default:
          toast.error("Unknown user role. Please contact support.");
      }
    } else if (auth.error) {
      toast.error("Login failed. Please check your credentials.");
    }
  }, [auth.isAuthenticated, auth.error, auth.user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  return (
    <div className="flex justify-center min-h-[100vh]">
      <Toaster />
      <div className="flex justify-center gap-10 lg:gap-28 mx-10 my-48 flex-wrap">
        <div className="max-w-full">
          <img src={IMAGES.gambarLogin} alt="" width={600} />
          <img
            className="absolute right-0 z-[-999] top-0"
            src={IMAGES.blob}
            alt=""
            width={730}
          />
          <div className="text-blue-950 font-bold text-center mb-3 text-2xl">
            LOGIN
          </div>
        </div>
        <div className="flex flex-col">
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
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <input
              className="h-10 rounded-lg border-none shadow"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={handleLogin}
              className="flex justify-center w-full py-1 bg-sky-500 rounded-md text-white"
            >
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
