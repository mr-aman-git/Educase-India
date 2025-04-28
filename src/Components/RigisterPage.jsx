import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const goToProfilePage = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-between bg-gray-50 overflow-hidden">
        <div className="flex-grow flex items-center justify-center overflow-hidden">
          <div className="w-[350px] p-6 bg-[#f7f8f9] border border-gray-300 rounded-md flex flex-col justify-between h-[600px]">
            <div className="w-full">
              <h1 className="text-2xl font-bold mb-2">
                Create your
                <br />
                PopX account
              </h1>

              <form className="mt-4 space-y-2" onSubmit={goToProfilePage}>
                <div>
                  <label className="block text-purple-600 text-[14px]">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Marry Doe"
                    className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-purple-600 text-[14px]">
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-purple-600 text-[14px]">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-purple-600 text-[14px]">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-purple-600 text-[14px]">
                    Company name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
                  />
                </div>

                <div className="mt-2">
                  <label className="block mb-2 text-purple-600 text-[14px]">
                    Are you an Agency?<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="agency"
                        value="yes"
                        className="accent-purple-600"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="agency"
                        value="no"
                        className="accent-purple-600"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6c25ff] text-white font-semibold py-2 rounded-md mt-14 cursor-pointer transition-all"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
