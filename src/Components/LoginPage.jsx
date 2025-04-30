import React from "react";
import { usePage } from "./hook/PageContext";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const {loginEmail, setLoginEmail, loginPass, setLoginPass, setPage} = usePage()
  const handleLogin = (e) => {
    e.preventDefault();
  
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
  
    if (loginEmail === savedEmail && loginPass === savedPassword) {
      toast.success('Login Successfull', {
        position: "top-center",
        autoClose: 5000,
        });
        setTimeout(() => {
          setPage(4);
        }, 1000);
    } else {
      toast.error('Invalid Email or Password', {
        position: "top-center",
        
        });
    }
  };
  
  return (
    <>
      <div className="h-[90vh] flex flex-col justify-between bg-gray-50 overflow-hidden">
        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <div className="w-80 p-6 bg-[#f7f8f9] border border-[#dfe0e1] flex flex-col justify-start h-[600px]">
            <div className="w-full flex flex-col">
              <h1 className="text-2xl font-bold mb-2">
                Signin to your <br /> PopX account
              </h1>

              <p className="text-gray-500 text-sm mb-4 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>

              <div className="w-full mb-4">
                <label className="text-xs font-semibold text-purple-600">
                  Email Address
                </label>
                <input
                onChange={(e)=>setLoginEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-md px-[10px] py-[6px] mt-1 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div className="w-full mb-4">
                <label className="text-xs font-semibold text-purple-600">
                  Password
                </label>
                <input
                onChange={(e)=>setLoginPass(e.target.value)}
                  type="password"
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-md px-[10px] py-[6px] mt-1 focus:outline-none focus:border-purple-600"
                />
              </div>

              <button 
              onClick={handleLogin}
              className="w-full font-semibold py-2 rounded-md bg-[#6c25ff] text-white cursor-pointer">
                Login
              </button>
            </div>
          </div>
        </div>

        
      </div>
      <ToastContainer />
    </>
  );
};

export { LoginPage };
