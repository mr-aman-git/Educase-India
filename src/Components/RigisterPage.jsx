import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const navigate = useNavigate(); 
        const goToProfilePage = () => {
            navigate('/profile');
          };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-[350px] p-8 bg-[#f7f8f9] border border-gray-300 rounded-md h-[600px] ">
        <h1 className="text-2xl font-bold mb-2">Create your<br/>PopX account</h1>
        <form className="mt-6 space-y-2">
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
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 text-[14px]">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 text-[14px]">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-purple-600 text-[14px]">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-md py-[4px] px-3 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" value="yes" className="accent-purple-600" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" value="no" className="accent-purple-600" />
                <span>No</span>
              </label>
            </div>
            <button
            onClick={goToProfilePage}
            type="submit"
            className="w-full bg-[#6c25ff] text-white font-semibold py-2 rounded-md mt-[50px] cursor-pointer transition-all"
          >
            Create Account
          </button>
          </div>

          
        </form>
      </div>
    </div>
  <Footer/>
    </>
  );
};

export default RegisterPage;
