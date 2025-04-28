import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="h-[90vh] flex flex-col justify-between bg-gray-50 overflow-hidden">
        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <div className="w-80 p-6 bg-[#f7f8f9] border border-[#dfe0e1] flex flex-col justify-end items-center h-[600px]">
            <div className="w-full flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-2 mr-16">Welcome to PopX</h1>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <button
                onClick={goToRegisterPage}
                className="w-full bg-[#6c25ff] text-white font-semibold py-2 rounded-md mb-3 cursor-pointer"
              >
                Create Account
              </button>
              <button
                onClick={goToLoginPage}
                className="w-full bg-purple-100 text-[#31333f] font-semibold py-2 rounded-md cursor-pointer"
              >
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
