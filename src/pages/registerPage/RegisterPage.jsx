import React from "react";
import { IMAGES } from "../../assets/constant";
import { useState } from "react";


function RegisterPage() {
    const [input, setInput] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
   
    const [error, setError] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
   
    const onInputChange = e => {
      const { name, value } = e.target;
      setInput(prev => ({
        ...prev,
        [name]: value
      }));
      validateInput(e);
    }
   
    const validateInput = e => {
      let { name, value } = e.target;
      setError(prev => {
        const stateObj = { ...prev, [name]: "" };
   
        switch (name) {
          case "username":
            if (!value) {
              stateObj[name] = "Please enter Username.";
            }
            break;
   
          case "password":
            if (!value) {
              stateObj[name] = "Please enter Password.";
            } else if (input.confirmPassword && value !== input.confirmPassword) {
              stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
            } else {
              stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
            }
            break;
   
          case "confirmPassword":
            if (!value) {
              stateObj[name] = "Please enter Confirm Password.";
            } else if (input.password && value !== input.password) {
              stateObj[name] = "Password and Confirm Password does not match.";
            }
            break;
   
          default:
            break;
        }
   
        return stateObj;
      });
    }
   

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
              onChange={onInputChange}
              onBlur={validateInput}
            />
            {error.username && <span className='err'>{error.username}</span>}
            <input
              className="h-10 rounded-lg border-none shadow"
              type="email"
              placeholder="Email"
              onChange={onInputChange}
              onBlur={validateInput}
            />
            {error.email && <span className='err'>{error.email}</span>}
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Password"
              onChange={onInputChange}
              onBlur={validateInput}
            />
             {error.password && <span className='err'>{error.password}</span>}
            <input
              className="h-10 rounded-lg border-none shadow"
              type="text"
              placeholder="Konfirmasi Password"
              onChange={onInputChange}
              onBlur={validateInput}
            />
             {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
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
