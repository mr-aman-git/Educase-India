import React from 'react';
import Footer from './Footer';


const LoginPage = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 overflow-x-hidden">
      <div className="w-80 p-6 bg-[#f7f8f9] border border-[#dfe0e1] flex flex-col items-start h-[600px] ">
        
        <h1 className="text-2xl font-bold mb-2">Signin to your <br /> PopX account</h1>

        
        <p className="text-gray-500 text-sm mb-2 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        
        <div className="w-full mb-2">
          <label className="text-xs font-semibold text-purple-600">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md px-[10px] py-[6px] mt-1 focus:outline-none focus:border-purple-600"
          />
        </div>

        
        <div className="w-full mb-2">
          <label className="text-xs font-semibold text-purple-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-[10px] py-[6px] mt-1 focus:outline-none focus:border-purple-600"
          />
        </div>

       
        <button className="w-full bg-gray-300 text-white font-semibold py-2 rounded-md cursor-pointer">
          Login
        </button>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export {LoginPage};
